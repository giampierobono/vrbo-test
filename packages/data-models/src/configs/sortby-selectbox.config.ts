import { PropertiesSortByConfigModelType } from "../custom-types";
import { PropertiesSortBy, PropertiesSortByLabels } from "../enums";

export const propertiesSortByConfig: PropertiesSortByConfigModelType = {
  [PropertiesSortByLabels.TitleAsc]: {
    prop: PropertiesSortBy.Title,
    asc: true
  },
  [PropertiesSortByLabels.TitleDesc]: {
    prop: PropertiesSortBy.Title,
    asc: false
  },
  [PropertiesSortByLabels.RatingAsc]: {
    prop: PropertiesSortBy.Rating,
    asc: true
  },
  [PropertiesSortByLabels.RatingDesc]: {
    prop: PropertiesSortBy.Rating,
    asc: false
  },
  [PropertiesSortByLabels.RatingCountAsc]: {
    prop: PropertiesSortBy.RatingCount,
    asc: true
  },
  [PropertiesSortByLabels.RatingCountDesc]: {
    prop: PropertiesSortBy.RatingCount,
    asc: false
  },
  [PropertiesSortByLabels.PriceAsc]: {
    prop: PropertiesSortBy.Price,
    asc: true
  },
  [PropertiesSortByLabels.PriceDesc]: {
    prop: PropertiesSortBy.Price,
    asc: false
  },
  [PropertiesSortByLabels.BedsAsc]: {
    prop: PropertiesSortBy.Beds,
    asc: true
  },
  [PropertiesSortByLabels.BedsDesc]: {
    prop: PropertiesSortBy.Beds,
    asc: false
  },
  [PropertiesSortByLabels.BathAsc]: {
    prop: PropertiesSortBy.Bath,
    asc: true
  },
  [PropertiesSortByLabels.BathDesc]: {
    prop: PropertiesSortBy.Bath,
    asc: false
  },
  [PropertiesSortByLabels.SqFeetsAsc]: {
    prop: PropertiesSortBy.SqFeets,
    asc: true
  },
  [PropertiesSortByLabels.SqFeetsDesc]: {
    prop: PropertiesSortBy.SqFeets,
    asc: false
  }
};
