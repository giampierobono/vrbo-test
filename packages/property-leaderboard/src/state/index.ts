import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";

export * from "./epics";
export * from "./reducers";

const epicMiddleware = createEpicMiddleware();

const configureStore = (): Store => {
  const result = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);

  return result;
};

export const store: Store = configureStore();
