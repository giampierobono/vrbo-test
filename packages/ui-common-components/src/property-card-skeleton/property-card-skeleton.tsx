import React from "react";
import "./property-card-skeleton.component.scss";

export const PropertyCardSkeletonComponent = (): React.ReactElement => {
  const skeletonCards = [];
  for (let i = 0; i < 10; i++) {
    skeletonCards.push(
      <div className="card-skeleton my-3" key={`skeleton-${i}`} />
    );
  }
  return (
    <div className="row">
      <div className="col-12 d-flex flex-column align-items-center">
        {skeletonCards}
      </div>
    </div>
  );
};
