import {
  propertiesPollLoadingEndAction,
  propertiesPollLoadingStartAction
} from "../../../actions/api-call-status";
import {
  apiCallStatusReducer,
  initialApiCallStatusState
} from "../api-call-status.reducer";

describe("Api call status reducer", () => {
  it("should return state for unknown actions", () => {
    const result = apiCallStatusReducer(initialApiCallStatusState, {
      type: "UNKNOWN"
    });
    expect(result).toEqual(initialApiCallStatusState);
  });

  it("should set propertiesPollLoading to TRUE when PropertiesPollLoadingStart action is dispatched", () => {
    const result = apiCallStatusReducer(
      initialApiCallStatusState,
      propertiesPollLoadingStartAction()
    );
    expect(result.propertiesPollLoading).toBeTruthy();
  });

  it("should set propertiesPollLoading to FALSE when PropertiesPollLoadingEnd action is dispatched", () => {
    const result = apiCallStatusReducer(
      initialApiCallStatusState,
      propertiesPollLoadingEndAction()
    );
    expect(result.propertiesPollLoading).toBeFalsy();
  });
});
