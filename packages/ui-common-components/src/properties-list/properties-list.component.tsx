import { Property } from "@vrbo/data-models";
import * as React from "react";
import { PropertyCardComponent } from "../property-card";
import { PropertyCardSkeletonComponent } from "../property-card-skeleton";

export const PropertiesListComponent: React.FunctionComponent<{
  properties: Property[];
  isPropertiesListLoading: boolean;
}> = ({
  properties,
  isPropertiesListLoading
}: {
  properties: Property[];
  isPropertiesListLoading: boolean;
}) => (
  <div>
    {isPropertiesListLoading ? (
      <PropertyCardSkeletonComponent />
    ) : (
      properties.map((property: Property, index: number) => (
        <PropertyCardComponent property={property} key={index} />
      ))
    )}
  </div>
);
