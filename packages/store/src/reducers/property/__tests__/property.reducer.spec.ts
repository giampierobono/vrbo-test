import { mockState } from "../../../../../../jest-global-mocks";
import { updatePropertiesListAction } from "../../../actions/property";
import { initialPropertyState, propertyReducer } from "../property.reducer";

describe("Property reducer", () => {
  it("should return state for UNKNOWN actions", () => {
    const result = propertyReducer(initialPropertyState, { type: "UNKNOWN" });
    expect(result).toEqual(initialPropertyState);
  });

  it("should set a new properties list", () => {
    const result = propertyReducer(
      initialPropertyState,
      updatePropertiesListAction([...mockState.propertiesList.properties])
    );
    expect(result).toMatchSnapshot();
  });
});
