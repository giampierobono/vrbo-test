import { ActionWithPayload, PollerConfig } from "@vrbo/data-models";

export enum PollerConfigActions {
  SetNewPollerConfig = "[PollerConfig] Set new poller config"
}

export const setNewPollerConfigAction = (
  newConfig: PollerConfig
): ActionWithPayload<PollerConfig> => ({
  type: PollerConfigActions.SetNewPollerConfig,
  payload: newConfig
});
