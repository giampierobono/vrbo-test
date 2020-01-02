import { mockState } from "../../../../../jest-global-mocks";
import { getPropertiesListLoadingStatus } from "../api-call-status.selectors";

describe("Api call status selectors", () => {
  describe("getPropertiesListLoadingStatus", () => {
    it("should return correct value", () => {
      expect(getPropertiesListLoadingStatus(mockState)).toMatchSnapshot();
    });
  });
});
