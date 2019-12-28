import { loadPropertiesList$ } from "@vrbo/store";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(loadPropertiesList$);
