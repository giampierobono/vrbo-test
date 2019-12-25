import { PropertyType } from "../enums";

export interface PollerConfig {
  type: PropertyType;
  limit: number;
}
