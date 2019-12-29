import { poll } from "@vrbo/api-poller";
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
  exhaustMap,
  map,
  mapTo,
  switchMap,
  take,
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

const loadPropertiesList$ = (actions$: ActionsObservable<Action>) =>
  actions$.pipe(
    ofType(PropertyActions.PollPropertiesList),
    switchMap(() =>
      timer(0, 15000).pipe(mapTo(propertiesPollLoadingStartAction()))
    )
  );

const propertiesPollLoadingStart$ = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<any>
) =>
  actions$.pipe(
    ofType(ApiCallStatusActions.PropertiesPollLoadingStart),
    withLatestFrom(state$),
    exhaustMap(([, state]: [Action, GlobalState]) =>
      fromPromise(poll(state.pollerConfig.config)).pipe(
        take(1),
        map(updatePropertiesListAction),
        catchError((err: any) => of(failPollingPropertiesListAction(err)))
      )
    )
  );

const propertiesPollLoadingEnd$ = (actions$: ActionsObservable<Action>) =>
  actions$.pipe(
    ofType(PropertyActions.UpdatePropertiesList),
    mapTo(propertiesPollLoadingEndAction())
  );

export const propertyEpics$ = combineEpics(
  loadPropertiesList$,
  propertiesPollLoadingStart$,
  propertiesPollLoadingEnd$
);
