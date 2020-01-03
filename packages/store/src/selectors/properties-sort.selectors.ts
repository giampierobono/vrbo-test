import { PropertiesSortByConfig } from "@vrbo/data-models";
import { GlobalState } from "../global-state.model";

export const getPropertiesSortByConfig = (
  state: GlobalState
): PropertiesSortByConfig => state.propertiesListSortBy.sortConfig;
