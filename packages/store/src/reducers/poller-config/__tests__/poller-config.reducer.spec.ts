import { PropertyType } from "@vrbo/data-models";
import { setNewPollerConfigAction } from "../../../actions/poller-config";
import {
  initialPollerConfigState,
  pollerConfigReducer
} from "../poller-config.reducer";

describe("Poller config reducer", () => {
  it("should return state for UNKNOWN actions", () => {
    const result = pollerConfigReducer(initialPollerConfigState, {
      type: "UNKNOWN"
    });
    expect(result).toEqual(initialPollerConfigState);
  });

  it("should set new poller config", () => {
    const result = pollerConfigReducer(
      initialPollerConfigState,
      setNewPollerConfigAction({ limit: 100, type: PropertyType.Condos })
    );
    expect(result).toMatchSnapshot();
  });
});
