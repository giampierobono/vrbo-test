import { Property } from "@vrbo/data-models";
import * as React from "react";

export const PropertyCardComponent: React.FunctionComponent<{
  property: Property;
}> = ({ property }: { property: Property }) => (
  <div className="row">
    <div className="col">{JSON.stringify(property)}</div>
  </div>
);
