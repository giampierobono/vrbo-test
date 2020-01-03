import { poll } from "@vrbo/api-poller";
import { Property, PropertyType } from "@vrbo/data-models";
import { Action } from "redux";
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable
} from "redux-observable";
import { of, timer } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import {
  catchError,
  map,
  mapTo,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import {
  ApiCallStatusActions,
  propertiesPollLoadingEndAction,
  propertiesPollLoadingStartAction
} from "../../actions/api-call-status";
import {
  failPollingPropertiesListAction,
  PropertyActions,
  updatePropertiesListAction
} from "../../actions/property";
import { GlobalState } from "../../global-state.model";

export const loadPropertiesList$ = (actions$: ActionsObservable<Action>) =>
  actions$.pipe(
    ofType(PropertyActions.PollPropertiesList),
    switchMap(() =>
      timer(0, 15000).pipe(mapTo(propertiesPollLoadingStartAction()))
    )
  );

export const propertiesPollLoadingStart$ = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<any>
) =>
  actions$.pipe(
    ofType(ApiCallStatusActions.PropertiesPollLoadingStart),
    withLatestFrom(state$),
    switchMap(([, state]: [Action, GlobalState]) =>
      fromPromise(
        Promise.all([
          poll({ ...state.pollerConfig.config, type: PropertyType.Houses }),
          poll({ ...state.pollerConfig.config, type: PropertyType.Condos })
        ])
      ).pipe(
        map(([houses, condos]: [Property[], Property[]]) =>
          updatePropertiesListAction([...houses, ...condos])
        ),
        catchError((err: any) => of(failPollingPropertiesListAction(err)))
      )
    )
  );

export const propertiesPollLoadingEnd$ = (
  actions$: ActionsObservable<Action>
) =>
  actions$.pipe(
    ofType(PropertyActions.UpdatePropertiesList),
    mapTo(propertiesPollLoadingEndAction())
  );

export const propertyEpics$ = combineEpics(
  loadPropertiesList$,
  propertiesPollLoadingStart$,
  propertiesPollLoadingEnd$
);
