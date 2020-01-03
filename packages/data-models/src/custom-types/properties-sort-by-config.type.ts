import { PropertiesSortByLabels } from "../enums";
import { PropertiesSortByConfig } from "../models";

export type PropertiesSortByConfigModelType = {
  [key in PropertiesSortByLabels]: PropertiesSortByConfig;
};
