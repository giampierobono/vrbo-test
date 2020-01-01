import { ApiCallStatusState } from "./reducers/api-call-status";
import { PollerConfigState } from "./reducers/poller-config";
import { PropertiesListSortByState } from "./reducers/properties-sort";
import { PropertyState } from "./reducers/property";

export interface GlobalState {
  propertiesList: PropertyState;
  pollerConfig: PollerConfigState;
  apiCallStatus: ApiCallStatusState;
  propertiesListSortBy: PropertiesListSortByState;
}
