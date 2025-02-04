import { Property } from "@vrbo/data-models";
import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { PropertyCardCarousel } from "../carousel";
import { ImageHolderJs } from "../holderjs-image";
import "./property-card.component.scss";

const CardTitle = ({ title }: { title: string }): React.ReactElement => (
  <div className="row property-card__title-container">
    <div className="col-12 property-card__title m-0">{title}</div>
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
        <span className="property-card__details--title">{detailTitle}</span>
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

const CardPropertyDetails = ({
  beds,
  bathrooms
}: {
  beds: number;
  bathrooms: number;
}): React.ReactElement => (
  <div className="row">
    <div className="col-12 property-card__details-xs property-card__details-small-text">
      {beds} beds <span>&#183;</span> {bathrooms} bathrooms <span>&#183;</span>{" "}
      {beds * 2} sleeps
    </div>
    <div className="col-12 property-card__details-md">
      <div className="row mt-3">
        <div className="col-2">
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

const PropertyCardMdUp = ({
  title,
  bath,
  beds,
  rating,
  price,
  ratingCount
}: {
  title: string;
  bath: number;
  beds: number;
  rating: number;
  price: number;
  ratingCount: number;
}) => (
  <div className="property-card-md">
    <div className="row my-3 shadow">
      <div className="col-12">
        <div className="row property-card">
          <div className="col-md-4 col-sm-12 property-card__carousel p-0 pr-3">
            <PropertyCardCarousel />
          </div>
          <div className="col-md-8 col-sm-12 py-4 px-3">
            <CardTitle title={title} />
            <CardPropertyDetails bathrooms={bath} beds={beds} />
            <div className="row mt-3">
              <div className="col-12 pb-1 property-card__rating">
                {/*Probably "wonderful" only for high rating. Missing design for this label*/}
                Wonderful {rating}/5
              </div>
              <div className="col">
                <div className="d-block">
                  <span className="property-card__price">${price}</span>{" "}
                  <span className="property-card__sub-text">avg/night</span>
                </div>
              </div>
              <div className="col d-flex justify-content-end">
                <StarRatingComponent
                  name="rate-property"
                  editing={false}
                  starCount={5}
                  value={rating}
                />
                <span className="property-card__sub-text pl-2">
                  {ratingCount} reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PropertyCardXsUp = ({
  price,
  beds,
  bath,
  rating,
  ratingCount
}: {
  price: number;
  beds: number;
  bath: number;
  rating: number;
  ratingCount: number;
}) => (
  <div className="property-card-xs">
    <div className="row my-3">
      <div className="col-12 d-flex flex-column align-items-center">
        <div className="row property-card shadow">
          <div className="col-12">
            <ImageHolderJs
              src={
                "holder.js/295x180?auto=yes&text=Amazing property&bg=282c34&theme=vine"
              }
              alt={"Amazing property"}
              cssClasses={"d-block w-100"}
            />
          </div>
          <div className="col-12 px-3">
            <span className="property-card__price">${price}</span>{" "}
            <span className="property-card__sub-text">avg/night</span>
          </div>
          <div className="col-12 px-3">
            <CardPropertyDetails beds={beds} bathrooms={bath} />
          </div>
          <div className="col-12 d-flex justify-content-start px-3 pb-2">
            <StarRatingComponent
              name="rate-property"
              editing={false}
              starCount={5}
              value={rating}
            />
            <h5 className="property-card__sub-text pl-2">
              {ratingCount} reviews
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PropertyCardComponent: React.FunctionComponent<{
  property: Property;
}> = ({ property }: { property: Property }) => (
  <div>
    <PropertyCardXsUp
      price={property.price}
      beds={property.beds}
      bath={property.bath}
      rating={property.rating}
      ratingCount={property.ratingCount}
    />
    <PropertyCardMdUp
      title={property.title}
      bath={property.bath}
      beds={property.beds}
      rating={property.rating}
      price={property.price}
      ratingCount={property.ratingCount}
    />
  </div>
);
