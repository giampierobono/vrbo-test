import { Property } from "@vrbo/data-models";
import { GlobalState } from "../global-state.model";

export const getPropertiesList = (state: GlobalState): Property[] =>
  state.propertiesList.properties;
