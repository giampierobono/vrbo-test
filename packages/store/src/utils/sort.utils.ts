import { Property } from "@vrbo/data-models";
import { prop, sortBy } from "ramda";

const sortByProp = (objProp: string) => sortBy(prop(objProp));

export const sortByTitle = (properties: Property[]): Property[] =>
  sortByProp("title")(properties);

export const sortByRating = (properties: Property[]): Property[] =>
  sortByProp("rating")(properties);

export const sortByRatingCount = (properties: Property[]): Property[] =>
  sortByProp("ratingCount")(properties);

export const sortByPrice = (properties: Property[]): Property[] =>
  sortByProp("price")(properties);

export const sortByBeds = (properties: Property[]): Property[] =>
  sortByProp("beds")(properties);

export const sortByBath = (properties: Property[]): Property[] =>
  sortByProp("bath")(properties);

export const sortBySqFeets = (properties: Property[]): Property[] =>
  sortByProp("sqFeet")(properties);
