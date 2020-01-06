# @vrbo/data-models

This packages contains all interfaces, enums and configs shared with all other packages. 

Below details of what's included in this package.

## Configs

| Name                     | Type                              | Description                                                  |
| :----------------------- | --------------------------------- | ------------------------------------------------------------ |
| `propertiesSortByConfig` | `PropertiesSortByConfigModelType` | Configuration for sortBy selectbox. Introduced to simplify adding new way of sort properties list without changing any other code. |

## Custom types

| Name                              | Decription                                                   |
| --------------------------------- | ------------------------------------------------------------ |
| `PropertiesSortByConfigModelType` | Defines a mapped object having as key one of `PropertiesSortByLabels` keys and a `PropertiesSortByConfig` as value. |

## Enums

| Name                     | Decription                                                   |
| ------------------------ | ------------------------------------------------------------ |
| `PropertiesSortBy`       | Defines a set of values representing `Property` prop value names to be used to sort properties list. |
| `PropertiesSortByLabels` | Define a set of static labels to be used as sortBy selectbox options. Imagine having a translation system, this enum could contain translation key values. |
| `PropertyType`           | Define type of properties.                                   |

## Interfaces

| Name                     | Decription                                                   |
| ------------------------ | ------------------------------------------------------------ |
| `ActionWithPayload<T>`   | Defines an object exteding `rxjs/Action` with a typed (`T`) payload property. It has been included to have typed redux actions payload. Ex: `const myAction: ActionWithPayload<Property[]>` |
| `PollerConfig`           | Define a config object to be sent as `poll` method input.    |
| `Properties`             | Define an object containing an array of `Property`. Not used. |
| `PropertiesSortByConfig` | Define an object used to configure the sortBy selectbox.     |
| `Property`               | Define a object describing a property (both house and condos). |

