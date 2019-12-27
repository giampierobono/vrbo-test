import {
  ActionWithPayload,
  PollerConfig,
  PropertyType
} from "@vrbo/data-models";
import { PollerConfigActions } from "../../actions";

export interface PollerConfigState {
  config: PollerConfig;
}

export const initialPollerConfigState: PollerConfigState = {
  config: {
    limit: 10,
    type: PropertyType.Houses
  }
};

export const pollerConfigReducer = (
  state: PollerConfigState = initialPollerConfigState,
  action: ActionWithPayload<PollerConfig>
) => {
  switch (action.type) {
    case PollerConfigActions.SetNewPollerConfig: {
      return {
        ...state,
        config: {
          ...action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};
