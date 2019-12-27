import { PropertiesSortBy, Property } from "@vrbo/data-models";
import { createSelector } from "reselect";
import { GlobalState } from "../global-state.model";

const getPropertiesList = (
  state: GlobalState,
  props: { sortBy: PropertiesSortBy }
) => state.propertiesList.properties;

export const makeGetOrderedPropertiesList = () =>
  createSelector(
    [getPropertiesList],
    (
      propertiesList: Property[],
      props: { sortBy: PropertiesSortBy }
    ): Property[] => {
      switch (props.sortBy) {
        case PropertiesSortBy.Title: {
          return propertiesList.sort((a, b) =>
            a.title === b.title ? 0 : a.title > b.title ? 1 : 0
          );
        }
        default: {
          return propertiesList;
        }
      }
    }
  );
