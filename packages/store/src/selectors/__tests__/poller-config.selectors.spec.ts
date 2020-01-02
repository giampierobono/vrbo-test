import { mockState } from "../../../../../jest-global-mocks";
import { getPollerConfig } from "../poller-config.selectors";

describe("Poller config selectors", () => {
  describe("getPollerConfig", () => {
    it("should return correct value", () => {
      expect(getPollerConfig(mockState)).toMatchSnapshot();
    });
  });
});
