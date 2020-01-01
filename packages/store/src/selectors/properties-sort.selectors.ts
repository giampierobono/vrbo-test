import { GlobalState } from "../global-state.model";

export const getPropertiesSortByConfig = (state: GlobalState) =>
  state.propertiesListSortBy.sortConfig;
