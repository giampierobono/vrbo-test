import { poll } from "@vrbo/api-poller";
import { Action } from "redux";
import { ActionsObservable, ofType, StateObservable } from "redux-observable";
import { of, timer } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import {
  catchError,
  exhaustMap,
  map,
  switchMap,
  take,
  withLatestFrom
} from "rxjs/operators";
import {
  failPollingPropertiesListAction,
  PropertyActions,
  updatePropertiesListAction
} from "../../actions/property";
import { GlobalState } from "../../global-state.model";

export const loadPropertiesList$ = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<any>
) =>
  actions$.pipe(
    ofType(PropertyActions.PollPropertiesList),
    switchMap(() =>
      timer(0, 15000).pipe(
        withLatestFrom(state$),
        exhaustMap(([, state]: [number, GlobalState]) =>
          fromPromise(poll(state.pollerConfig.config)).pipe(
            take(1),
            map(updatePropertiesListAction),
            catchError((err: any) => of(failPollingPropertiesListAction(err)))
          )
        )
      )
    )
  );
