import { ActionWithPayload, PropertiesSortBy } from "@vrbo/data-models";
import { PropertiesSortActions } from "../../actions/properties-sort";

export interface PropertiesListSortByState {
  sortConfig: PropertiesSortBy;
}

export const initialPropertiesListSortByState: PropertiesListSortByState = {
  sortConfig: PropertiesSortBy.Title
};

export const propertiesListSortReducer = (
  state: PropertiesListSortByState = initialPropertiesListSortByState,
  action: ActionWithPayload<PropertiesSortBy>
): PropertiesListSortByState => {
  switch (action.type) {
    case PropertiesSortActions.SetSortParam: {
      return {
        ...state,
        sortConfig: action.payload!
      };
    }
    default: {
      return state;
    }
  }
};
