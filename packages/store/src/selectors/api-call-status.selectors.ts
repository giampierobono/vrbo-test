import { GlobalState } from "../global-state.model";

export const getPropertiesListLoadingStatus = (state: GlobalState) =>
  state.apiCallStatus.propertiesPollLoading;
