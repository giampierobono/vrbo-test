import { Property } from "@vrbo/data-models";
import React from "react";
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
  // ISSUE with DefinitelyTyped (https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356)
  <>
    {isPropertiesListLoading ? (
      <PropertyCardSkeletonComponent />
    ) : (
      properties.map((property: Property, index: number) => (
        <PropertyCardComponent property={property} key={index} />
      ))
    )}
  </>
);
