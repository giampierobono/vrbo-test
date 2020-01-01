import * as React from "react";
import { Provider } from "react-redux";
import {
  PropertiesListContainer,
  SortBySelectBoxContainer
} from "./components";
import { store } from "./state";

export const App = () => (
  <Provider store={store}>
    <h1 className="text-center">Property Leaderboard</h1>
    <div className="row ml-2">
      <div className="col-6">
        <SortBySelectBoxContainer />
      </div>
    </div>
    <PropertiesListContainer />
  </Provider>
);
