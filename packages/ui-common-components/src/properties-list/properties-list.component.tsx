import { Property } from "@vrbo/data-models";
import * as React from "react";
import { PropertyCardComponent } from "../property-card";

export const PropertiesListComponent: React.FunctionComponent<{
  properties: Property[];
}> = ({ properties }: { properties: Property[] }) => (
  <div>
    {properties.map((property: Property, index: number) => (
      <PropertyCardComponent property={property} key={index} />
    ))}
  </div>
);
