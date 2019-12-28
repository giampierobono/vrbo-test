import { Property } from "@vrbo/data-models";
import * as React from "react";

export const HelloWorldComponent = ({
  properties
}: {
  properties: Property[];
}) => <div>HelloWorld: {JSON.stringify(properties)}</div>;
