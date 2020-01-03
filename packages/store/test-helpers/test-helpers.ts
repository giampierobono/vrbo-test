import { Action } from "redux";
import { ActionsObservable } from "redux-observable";
import { EMPTY, Observable } from "rxjs";

export class ActionsMock<T> extends ActionsObservable<Action> {
  public source: Observable<any>;

  constructor() {
    super(EMPTY);
  }

  public setSource(source: Observable<T>): void {
    this.source = source;
  }
}
