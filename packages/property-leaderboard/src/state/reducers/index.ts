import {
  apiCallStatusReducer,
  pollerConfigReducer,
  propertyReducer
} from "@vrbo/store";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  propertiesList: propertyReducer,
  pollerConfig: pollerConfigReducer,
  apiCallStatus: apiCallStatusReducer
});
