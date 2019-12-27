import { PollerConfigState } from "./reducers/poller-config";
import { PropertyState } from "./reducers/property";

export interface GlobalState {
  propertiesList: PropertyState;
  pollerConfig: PollerConfigState;
}
