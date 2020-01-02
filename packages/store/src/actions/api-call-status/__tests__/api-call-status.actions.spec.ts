import {
  propertiesPollLoadingEndAction,
  propertiesPollLoadingStartAction
} from "../api-call-status.actions";

describe("Api call status actions", () => {
  it("should return correct propertiesPollLoadingStartAction action object", () => {
    expect(propertiesPollLoadingStartAction()).toMatchSnapshot();
  });

  it("should return correcnt propertiesPollLoadingStopAction action object", () => {
    expect(propertiesPollLoadingEndAction()).toMatchSnapshot();
  });
});
