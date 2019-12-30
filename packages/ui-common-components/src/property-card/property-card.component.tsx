import { Property } from "@vrbo/data-models";
import React from "react";
import "./property-card.component.scss";

export const PropertyCardComponent: React.FunctionComponent<{
  property: Property;
}> = ({ property }: { property: Property }) => (
  <div className="row">
    <div className="col-12 d-flex flex-column align-items-center">
      <div className="property-card mb-3">
        <div className="property-card__title">{property.title}</div>
      </div>
    </div>
  </div>
);
