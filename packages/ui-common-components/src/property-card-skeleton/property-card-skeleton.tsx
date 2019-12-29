import * as React from "react";
import "./property-card-skeleton.component.scss";

export const PropertyCardSkeletonComponent = (): React.ReactElement => {
  const skeletonCards = [];
  for (let i = 0; i < 10; i++) {
    skeletonCards.push(
      <div className="card-skeleton mb-3" key={"skeleton" + i} />
    );
  }
  return (
    <div className="row">
      <div className="col">{skeletonCards}</div>
    </div>
  );
};
