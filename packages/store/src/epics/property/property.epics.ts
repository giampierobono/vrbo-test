import { poll } from "@vrbo/api-poller";
import { Action } from "redux";
import { ActionsObservable, ofType, StateObservable } from "redux-observable";
import { of } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
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
    withLatestFrom(state$),
    switchMap(([, state]: [Action, GlobalState]) =>
      fromPromise(poll(state.pollerConfig.config)).pipe(
        map(updatePropertiesListAction),
        catchError((err: any) => of(failPollingPropertiesListAction(err)))
      )
    )
  );
