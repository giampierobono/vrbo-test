import { Action } from "redux";
import { StateObservable } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { Subject } from "rxjs";
import { marbles } from "rxjs-marbles";
import { mockState } from "../../../../../../jest-global-mocks";
import { ActionsMock } from "../../../../test-helpers/test-helpers";
import {
  propertiesPollLoadingEndAction,
  propertiesPollLoadingStartAction
} from "../../../actions/api-call-status";
import {
  loadPropertiesAction,
  updatePropertiesListAction
} from "../../../actions/property";
import {
  loadPropertiesList$,
  propertiesPollLoadingEnd$,
  propertiesPollLoadingStart$
} from "../property.epics";

describe("Property epics", () => {
  describe("loadPropertiesList$", () => {
    let actions$: ActionsObservable<Action>;
    it("should dispatch propertiesPollLoadingStartAction", async done => {
      actions$ = ActionsObservable.from([loadPropertiesAction()]);
      await loadPropertiesList$(actions$).subscribe(result => {
        expect(result).toEqual(propertiesPollLoadingStartAction());
        done();
      });
    });
  });

  describe("propertiesPollLoadingStart$", () => {
    it("should dispatch updatePropertiesListAction if poll success", async done => {
      const actions$ = ActionsObservable.from([
        propertiesPollLoadingStartAction()
      ]);
      const state$ = new StateObservable<any>(new Subject<any>(), mockState);
      await propertiesPollLoadingStart$(actions$, state$).subscribe(
        (result: Property[]) => {
          expect(result).toMatchSnapshot();
          done();
        }
      );
    });
  });

  describe("propertiesPollLoadingEnd$", () => {
    let actions$: ActionsMock<any>;

    beforeEach(() => {
      actions$ = new ActionsMock<any>();
    });

    it(
      "should dispatch propertiesPollLoadingEndAction",
      marbles(m => {
        actions$ = new ActionsMock<any>();

        actions$.setSource(
          m.cold("a", {
            a: updatePropertiesListAction([])
          })
        );
        m.expect(propertiesPollLoadingEnd$(actions$)).toBeObservable(
          m.cold("a", {
            a: propertiesPollLoadingEndAction()
          })
        );
        m.flush();
      })
    );
  });
});
