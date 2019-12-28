import { PollerConfig } from "@vrbo/data-models";
import { GlobalState } from "../global-state.model";

export const getPollerConfig = (state: GlobalState): PollerConfig =>
  state.pollerConfig.config;
