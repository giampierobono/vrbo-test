import {
  ActionWithPayload,
  PropertiesSortBy,
  PropertiesSortByConfig
} from "@vrbo/data-models";
import { PropertiesSortActions } from "../../actions/properties-sort";

export interface PropertiesListSortByState {
  sortConfig: PropertiesSortByConfig;
}

export const initialPropertiesListSortByState: PropertiesListSortByState = {
  sortConfig: {
    prop: PropertiesSortBy.Title,
    asc: true
  }
};

export const propertiesListSortReducer = (
  state: PropertiesListSortByState = initialPropertiesListSortByState,
  action: ActionWithPayload<PropertiesSortByConfig>
): PropertiesListSortByState => {
  switch (action.type) {
    case PropertiesSortActions.SetSortByConfig: {
      return {
        ...state,
        sortConfig: { ...action.payload! }
      };
    }
    default: {
      return state;
    }
  }
};
