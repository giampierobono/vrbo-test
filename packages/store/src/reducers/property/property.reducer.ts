import { ActionWithPayload, Property } from "@vrbo/data-models";
import { Action } from "redux";
import { PropertyActions } from "../../actions/property";

export interface PropertyState {
  properties: Property[];
}

export const initialPropertyState: PropertyState = {
  properties: []
};

export const propertyReducer = (
  state: PropertyState = initialPropertyState,
  action: ActionWithPayload<Property[] | any> | Action
) => {
  switch (action.type) {
    case PropertyActions.UpdatePropertiesList: {
      return {
        ...state,
        properties: [
          ...((action as ActionWithPayload<Property[]>).payload || [])
        ]
      };
    }
    default: {
      return state;
    }
  }
};
