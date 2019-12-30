import * as React from "react";
import { Provider } from "react-redux";
import { PropertiesListContainer } from "./components";
import { store } from "./state";

export const App = () => (
  <Provider store={store}>
    <PropertiesListContainer />
  </Provider>
);
