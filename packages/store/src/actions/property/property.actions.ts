import { ActionWithPayload, Property } from "@vrbo/data-models";
import { Action } from "redux";

export enum PropertyActions {
  PollPropertiesList = "[Property] Poll properties list",
  UpdatePropertiesList = "[Property] Update properties list",
  FailurePollingPropertiesList = "[Property] Failure polling properties list"
}

export const loadPropertiesAction = (): Action => ({
  type: PropertyActions.PollPropertiesList
});

export const updatePropertiesListAction = (
  properties: Property[]
): ActionWithPayload<Property[]> => ({
  type: PropertyActions.UpdatePropertiesList,
  payload: properties
});

export const failPollingPropertiesListAction = (
  error: any
): ActionWithPayload<any> => ({
  type: PropertyActions.FailurePollingPropertiesList,
  payload: error
});
