import { PropertiesListComponent } from "@vrbo/common-components";
import { GlobalState, loadPropertiesAction } from "@vrbo/store";
import { pathOr } from "ramda";
import * as React from "react";
import { connect, Provider } from "react-redux";
import { store } from "./state";

const mapStateToProps = (state: GlobalState) => {
  return {
    properties: pathOr([], ["propertiesList", "properties"])(state),
    isPropertiesListLoading: state.apiCallStatus.propertiesPollLoading
  };
};

const PropertiesListContainer = connect(mapStateToProps)(
  PropertiesListComponent
);
store.dispatch(loadPropertiesAction());

export function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <PropertiesListContainer />
          </div>
        </div>
      </div>
    </Provider>
  );
}
