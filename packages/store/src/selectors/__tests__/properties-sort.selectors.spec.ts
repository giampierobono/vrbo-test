import { mockState } from "../../../../../jest-global-mocks";
import { getPropertiesSortByConfig } from "../properties-sort.selectors";

describe("Properties sort config", () => {
  describe("getPropertiesSortByConfig", () => {
    it("should return correct value", () => {
      expect(getPropertiesSortByConfig(mockState)).toMatchSnapshot();
    });
  });
});
