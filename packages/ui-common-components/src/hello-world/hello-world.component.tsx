import { Property } from "@vrbo/data-models";
import * as React from "react";

export const HelloWorldComponent = (properties: Property[]) => (
  <div>HelloWorld: {properties}</div>
);
