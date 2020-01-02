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
    it("should return correct sorted list by title", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Title }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by rating", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Rating }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by rating count", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.RatingCount }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by price", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Price }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by beds", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Beds }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by baths", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.Bath }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });

    it("should return correct sorted list by sqFeets", () => {
      const newMockState: GlobalState = {
        ...mockState,
        propertiesListSortBy: { sortConfig: PropertiesSortBy.SqFeets }
      };
      expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
    });
  });
});
