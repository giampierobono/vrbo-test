import { ActionWithPayload, PropertiesSortByConfig } from "@vrbo/data-models";

export enum PropertiesSortActions {
  SetSortByConfig = "[PropertiesSort] Set new sort param"
}

export const setNewPropertiesSortAction = (
  sortBy: PropertiesSortByConfig
): ActionWithPayload<PropertiesSortByConfig> => ({
  type: PropertiesSortActions.SetSortByConfig,
  payload: sortBy
});
