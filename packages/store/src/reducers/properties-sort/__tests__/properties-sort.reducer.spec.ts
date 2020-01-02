import { PropertiesSortBy } from "@vrbo/data-models";
import { setNewPropertiesSortAction } from "../../../actions/properties-sort";
import {
  initialPropertiesListSortByState,
  propertiesListSortReducer
} from "../properties-sort.reducer";

describe("Properties sort reducer", () => {
  it("should return state for UNKNOWN actions", () => {
    const result = propertiesListSortReducer(initialPropertiesListSortByState, {
      type: "UNKNOWN"
    });
    expect(result).toEqual(initialPropertiesListSortByState);
  });

  it("should set new sort config params", () => {
    const result = propertiesListSortReducer(
      initialPropertiesListSortByState,
      setNewPropertiesSortAction(PropertiesSortBy.Price)
    );
    expect(result.sortConfig).toBe(PropertiesSortBy.Price);
  });
});
