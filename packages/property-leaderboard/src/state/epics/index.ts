import { propertyEpics$ } from "@vrbo/store";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(propertyEpics$);
