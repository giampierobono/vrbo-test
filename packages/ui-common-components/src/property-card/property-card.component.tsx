import { Property } from "@vrbo/data-models";
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { PropertyCardCarousel } from "../carousel";
import "./property-card.component.scss";

const CardTitle = ({ title }: { title: string }): React.ReactElement => (
  <div className="row">
    <div className="col-12 mb-3">
      <h4 className="property-card__title">{title}</h4>
    </div>
  </div>
);

const PropertyDetail = ({
  detailTitle,
  detailGrade,
  hasBorder
}: {
  detailTitle: string;
  detailGrade: number;
  hasBorder: boolean;
}): React.ReactElement => (
  <div className="row">
    <div className="col-12 property-card__details--title-container">
      <div className="d-flex justify-content-center">
        <h5 className="property-card__details--title">{detailTitle}</h5>
      </div>
    </div>
    <div
      className={`col-12 d-flex justify-content-center property-card__details--value ${
        hasBorder ? "border-right" : ""
      }`}
    >
      {detailGrade}
    </div>
  </div>
);

const CardPropertyDetailsLarge = ({
  beds,
  bathrooms
}: {
  beds: number;
  bathrooms: number;
}): React.ReactElement => (
  <div className="row">
    <div className="col-12 p-0">
      <div className="row">
        <div className="col-12 p-0 property-card__details-xs">
          {beds} beds <span>&#183;</span> {bathrooms} bathrooms{" "}
          <span>&#183;</span> {beds * 2} sleeps
        </div>
        <div className="col-2 property-card__details-md">
          {/*sleeps info not received from poller, supposing beds * 2*/}
          <PropertyDetail
            detailTitle={"Sleeps"}
            detailGrade={beds * 2}
            hasBorder={true}
          />
        </div>
        <div className="col-2 property-card__details-md">
          <PropertyDetail
            detailTitle={"Bedrooms"}
            detailGrade={beds}
            hasBorder={true}
          />
        </div>
        <div className="col-2 property-card__details-md">
          <PropertyDetail
            detailTitle={"Bathroom"}
            detailGrade={bathrooms}
            hasBorder={false}
          />
        </div>
      </div>
    </div>
  </div>
);

export const PropertyCardComponent: React.FunctionComponent<{
  property: Property;
}> = ({ property }: { property: Property }) => (
  <div className="row my-3 shadow">
    <div className="col-12">
      <div className="row property-card">
        <div className="col-md-4 col-sm-12 property-card__carousel p-0 pr-3">
          <PropertyCardCarousel />
        </div>
        <div className="col-md-8 col-sm-12 py-4 px-3">
          <CardTitle title={property.title} />
          <CardPropertyDetailsLarge
            bathrooms={property.bath}
            beds={property.beds}
          />
          <div className="row mt-2">
            <div className="col-12 pb-1 property-card__rating">
              {/*Probably "wonderful" only for high rating. Missing design for this label*/}
              Wonderful {property.rating}/5
            </div>
            <div className="col">
              <div className="d-block">
                <span className="property-card__price">${property.price}</span>{" "}
                <span className="property-card__sub-text">avg/night</span>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
              <StarRatingComponent
                name="rate-property"
                editing={false}
                starCount={5}
                value={property.rating}
              />
              <div className="property-card__sub-text pl-2">
                {property.ratingCount} reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
