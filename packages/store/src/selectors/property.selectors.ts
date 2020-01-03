import { PropertiesSortByConfig, Property } from "@vrbo/data-models";
import { createSelector } from "reselect";
import { GlobalState } from "../global-state.model";
import { sortByConfig } from "../utils";
import { getPropertiesSortByConfig } from "./properties-sort.selectors";

export const getPropertiesList = (state: GlobalState): Property[] =>
  state.propertiesList.properties;

export const getSortedPropertiesList = createSelector(
  getPropertiesList,
  getPropertiesSortByConfig,
  (propertiesList: Property[], sortBy: PropertiesSortByConfig): Property[] =>
    sortByConfig(sortBy)(propertiesList)
);
