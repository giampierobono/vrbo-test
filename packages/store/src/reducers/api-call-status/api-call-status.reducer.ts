import { Action } from "redux";
import { ApiCallStatusActions } from "../../actions/api-call-status";

export interface ApiCallStatusState {
  propertiesPollLoading: boolean;
}

export const initialApiCallStatusState: ApiCallStatusState = {
  propertiesPollLoading: false
};

export const apiCallStatusReducer = (
  state: ApiCallStatusState = initialApiCallStatusState,
  action: Action
) => {
  switch (action.type) {
    case ApiCallStatusActions.PropertiesPollLoadingStart: {
      return {
        ...state,
        propertiesPollLoading: true
      };
    }
    case ApiCallStatusActions.PropertiesPollLoadingEnd: {
      return {
        ...state,
        propertiesPollLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
