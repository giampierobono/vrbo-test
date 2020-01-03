import {
  PropertiesSortBy,
  propertiesSortByConfig,
  PropertiesSortByLabels
} from "@vrbo/data-models";
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
    test.each`
      sortBy                          | asc      | sortConfig
      ${PropertiesSortBy.Title}       | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.TitleAsc]}
      ${PropertiesSortBy.Title}       | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.TitleDesc]}
      ${PropertiesSortBy.Rating}      | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.RatingAsc]}
      ${PropertiesSortBy.Rating}      | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.RatingDesc]}
      ${PropertiesSortBy.RatingCount} | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.RatingCountAsc]}
      ${PropertiesSortBy.RatingCount} | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.RatingCountDesc]}
      ${PropertiesSortBy.Price}       | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.PriceAsc]}
      ${PropertiesSortBy.Price}       | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.PriceDesc]}
      ${PropertiesSortBy.Bath}        | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.BathAsc]}
      ${PropertiesSortBy.Bath}        | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.BathDesc]}
      ${PropertiesSortBy.Beds}        | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.BedsAsc]}
      ${PropertiesSortBy.Beds}        | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.BedsDesc]}
      ${PropertiesSortBy.SqFeets}     | ${true}  | ${propertiesSortByConfig[PropertiesSortByLabels.SqFeetsAsc]}
      ${PropertiesSortBy.SqFeets}     | ${false} | ${propertiesSortByConfig[PropertiesSortByLabels.SqFeetsDesc]}
    `(
      "should return correct sorted by $sortBy and asc: $asc",
      ({ sortConfig }) => {
        const newMockState: GlobalState = {
          ...mockState,
          propertiesListSortBy: {
            sortConfig: {
              ...sortConfig
            }
          }
        };
        expect(getSortedPropertiesList(newMockState)).toMatchSnapshot();
      }
    );
  });
});
