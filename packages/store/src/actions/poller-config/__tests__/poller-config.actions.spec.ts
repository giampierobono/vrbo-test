import { PropertyType } from "@vrbo/data-models";
import { setNewPollerConfigAction } from "../poller-config.actions";

describe("Poller config actions", () => {
  it("should return correct setNewPollerConfigAction object for type houses", () => {
    expect(
      setNewPollerConfigAction({ type: PropertyType.Houses, limit: 10 })
    ).toMatchSnapshot();
  });

  it("should return correct setNewPollerConfigAction object for type condos", () => {
    expect(
      setNewPollerConfigAction({ type: PropertyType.Condos, limit: 10 })
    ).toMatchSnapshot();
  });
});
