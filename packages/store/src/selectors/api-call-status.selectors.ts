import { GlobalState } from "../global-state.model";

export const getPropertiesListLoadingStatus = (state: GlobalState): boolean =>
  state.apiCallStatus.propertiesPollLoading;
