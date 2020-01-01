import { PropertiesSortBy, Property } from "@vrbo/data-models";
import { createSelector } from "reselect";
import { GlobalState } from "../global-state.model";
import {
  sortByBath,
  sortByBeds,
  sortByPrice,
  sortByRating,
  sortByRatingCount,
  sortBySqFeets,
  sortByTitle
} from "../utils";
import { getPropertiesSortByConfig } from "./properties-sort.selectors";

export const getPropertiesList = (state: GlobalState): Property[] =>
  state.propertiesList.properties;

export const getSortedPropertiesList = createSelector(
  getPropertiesList,
  getPropertiesSortByConfig,
  (propertiesList: Property[], sortBy: PropertiesSortBy): Property[] => {
    switch (sortBy) {
      case PropertiesSortBy.Title: {
        return sortByTitle(propertiesList);
      }
      case PropertiesSortBy.Rating: {
        return sortByRating(propertiesList);
      }
      case PropertiesSortBy.RatingCount: {
        return sortByRatingCount(propertiesList);
      }
      case PropertiesSortBy.Price: {
        return sortByPrice(propertiesList);
      }
      case PropertiesSortBy.Beds: {
        return sortByBeds(propertiesList);
      }
      case PropertiesSortBy.Bath: {
        return sortByBath(propertiesList);
      }
      case PropertiesSortBy.SqFeets: {
        return sortBySqFeets(propertiesList);
      }
      default: {
        return propertiesList;
      }
    }
  }
);
