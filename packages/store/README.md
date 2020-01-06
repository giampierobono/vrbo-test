# @vrbo/store

This package contains all actions, reducers, memoized selectors and epics. It depends on 3 external libraries: `react-redux`, `rxjs`, `reselect`. 

## Global state (interface)

This interface has been added to define the structure of the state that will be modifed by dispatching actions. 

It is defined like: 

```javascript
interface GlobalState {
  propertiesList: PropertyState;
  pollerConfig: PollerConfigState;
  apiCallStatus: ApiCallStatusState;
  propertiesListSortBy: PropertiesListSortByState;
}
```

and for each part of it there is a specific reducer in charge of modifying it. 

## Actions

Actions can be dispatched to update `state` or control `epics` flows. 

### Api call status actions

Used to handle loading state for "backend" calls. Actions types are defined by `ApiCallStatusActions` enum.

Exported actions:

| Name                               | Return type | Description                                                  |
| ---------------------------------- | ----------- | ------------------------------------------------------------ |
| `propertiesPollLoadingStartAction` | `Action`    | Dispacted when call to poll properties starts and set `loading = true`. |
| `propertiesPollLoadingEndAction`   | `Action`    | Dispatched when `poll` method promise is resolved and set `loading = false`. |

### Poller config actions

Functionality to allow changing poller config has not been implemented. These actions can be dispatched to set a new config for the poller. Actions type are defined by `PollerConfigActions` enum.

Exported actions:

| Name                       | Return type                       | Description                                   |
| -------------------------- | --------------------------------- | --------------------------------------------- |
| `setNewPollerConfigAction` | `ActionWithPayload<PollerConfig>` | Dispacted to set a new `PollerConfig` object. |

### Property sort actions

Used to set a new property sort config. Actions types are defined by `PropertiesSortActions` enum.

Exported actions:

| Name                         | Return type                                 | Description                                   |
| ---------------------------- | ------------------------------------------- | --------------------------------------------- |
| `setNewPropertiesSortAction` | `ActionWithPayload<PropertiesSortByConfig>` | Dispacted to set a new `PollerConfig` object. |

### Property actions

Used to set a new property sort config. Actions types are defined by `PropertyActions` enum.

Exported actions:

| Name                         | Return type                                 | Description                                   |
| ---------------------------- | ------------------------------------------- | --------------------------------------------- |
| `setNewPropertiesSortAction` | `ActionWithPayload<PropertiesSortByConfig>` | Dispacted to set a new `PollerConfig` object. |

## Reducers

Reducers are in charge of returing a new modified version of the state depending on the action dispatched.

There is one reducer for each "group" of actions described above, changing the state according to action payload.

In every reducer file is define an interface describing shape of the state section.

## Epics

Epics are used to subscribe to specific actions and, eventually, emit others. They are execture right after reducers.

### Property epics

| Name                          | Subscribe to                                      | Description                                                  |
| ----------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `loadPropertiesList$`         | `PropertyActions.PollPropertiesList`              | Starts a timer emitting `propertiesPollLoadingStartAction` every 15 secs, setting `propertiesPollLoading = true`. |
| `propertiesPollLoadingStart$` | `ApiCallStatusActions.PropertiesPollLoadingStart` | Call `poll` method twice combining returned promised using `Promise.all` method and converting result into an `Observable` using `fromPromise`. Dispatches `updatePropertiesListAction` in case of success, `failPollingPropertiesListAction` instead. |
| `propertiesPollLoadingEnd$`   | `PropertyActions.UpdatePropertiesList`            | Once list is updated, set `propertiesPollLoading = false`.   |

## Selectors

Selectors are used to get specific part of the state or to return a result coming from a computation done based on other observables results.

### API call status selectors

| Name                             | Return type | Description                                                  |
| -------------------------------- | ----------- | ------------------------------------------------------------ |
| `getPropertiesListLoadingStatus` | `boolean`   | Returns an observable with `propertiesPollLoading` from state. |

### Poller config selectors

| Name              | Return type    | Description                 |
| ----------------- | -------------- | --------------------------- |
| `getPollerConfig` | `PollerConfig` | Select `config` from state. |

### Properties sort by selectors

| Name                        | Return type              | Description                                         |
| --------------------------- | ------------------------ | --------------------------------------------------- |
| `getPropertiesSortByConfig` | `PropertiesSortByConfig` | Returns an observable with `sortConfig` from state. |

### Property selectors

| Name                      | Selectors subscribed                                | Return type  | Description                                         |
| ------------------------- | --------------------------------------------------- | ------------ | --------------------------------------------------- |
| `getPropertiesList`       | `None`                                              | `Property[]` | Returns an observable with `properties` from state. |
| `getSortedPropertiesList` | `getPropertiesList` and `getPropertiesSortByConfig` | `Property[]` | Return an observable with a sorted properties list  |

## Utils

| Name           | Inputs                               | Return                                   | Description                                                  |
| -------------- | ------------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| `sortByConfig` | `sortConfig: PropertiesSortByConfig` | `(properties: Property[]) => Property[]` | Returns a function accepting a list of properties as param. If called this returned function returns a sorted list of properties |