import { HelloWorldComponent } from "@vrbo/common-components";
import { GlobalState, loadPropertiesAction } from "@vrbo/store";
import { pathOr } from "ramda";
import * as React from "react";
import { connect, Provider } from "react-redux";
import { store } from "./state";

const mapStateToProps = (state: GlobalState) => {
  return { properties: pathOr([], ["propertiesList", "properties"])(state) };
};

const HelloWorldContainer = connect(mapStateToProps)(HelloWorldComponent);
store.dispatch(loadPropertiesAction());

export function App() {
  return (
    <Provider store={store}>
      <div>
        <HelloWorldContainer />
      </div>
    </Provider>
  );
}
