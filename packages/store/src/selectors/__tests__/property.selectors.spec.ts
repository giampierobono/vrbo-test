import { PropertiesSortBy } from "@vrbo/data-models";
import { mockState } from "../../../../../jest-global-mocks";
import { GlobalState } from "../../global-state.model";
import {
  getPropertiesList,
  getSortedPropertiesList
} from "../property.selectors";

describe("Properties sort selectors", () => {
  describe("getPropertiesList", () => {
    it("should return correct value", () => {
      expect(getPropertiesList(mockState)).toMatchSnapshot();
    });
  });

  describe("getSortedPropertiesList", () => {
    it("should return correct sorted list", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Price }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });
  });
});
