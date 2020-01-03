import { PropertiesSortBy } from "@vrbo/data-models";
import { setNewPropertiesSortAction } from "../properties-sort.actions";

describe("Properties sort config actions", () => {
  it("should return correct setNewPropertiesSortAction object", () => {
    expect(
      setNewPropertiesSortAction({ prop: PropertiesSortBy.Title, asc: true })
    ).toMatchSnapshot();
  });
});
