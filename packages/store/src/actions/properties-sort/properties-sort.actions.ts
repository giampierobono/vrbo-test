import { ActionWithPayload, PropertiesSortBy } from "@vrbo/data-models";

export enum PropertiesSortActions {
  SetSortParam = "[PropertiesSort] Set new sort param"
}

export const setNewPropertiesSortAction = (
  sortBy: PropertiesSortBy
): ActionWithPayload<PropertiesSortBy> => ({
  type: PropertiesSortActions.SetSortParam,
  payload: sortBy
});
