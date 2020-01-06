# @vrbo/api-poller

This package can be considered as the fake backend, providing data apps can consume. 

| **Method name** | **Inputs**                                              | **Return type**       | Description                                                  |
| :-------------- | :------------------------------------------------------ | :-------------------- | :----------------------------------------------------------- |
| poll            | __options__: `PollerConfig`, __callback__:` () => void` | `Promise<Property[]>` | This method will create a list of properties following a configuration recevied as parameter. |

