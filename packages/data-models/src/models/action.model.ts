import { Action as RxAction } from "redux";

export interface ActionWithPayload<T> extends RxAction {
  payload?: T;
}
