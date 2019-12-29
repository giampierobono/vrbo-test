import { Action } from "redux";

export enum ApiCallStatusActions {
  PropertiesPollLoadingStart = "[ApiCallStatus] Properties call loading start",
  PropertiesPollLoadingEnd = "[ApiCallStatus] Properties call loading end"
}

export const propertiesPollLoadingStartAction = (): Action => ({
  type: ApiCallStatusActions.PropertiesPollLoadingStart
});

export const propertiesPollLoadingEndAction = (): Action => ({
  type: ApiCallStatusActions.PropertiesPollLoadingEnd
});
