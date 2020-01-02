import { PropertiesSortBy } from "@vrbo/data-models";
import React, { ChangeEvent } from "react";

export const SortBySelectBox = ({
  onChangeCallback,
  disabled
}: {
  onChangeCallback: (changeEvent: ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
}): React.ReactElement => {
  const options = Object.keys(PropertiesSortBy).map(
    (key: string, index: number) => (
      <option key={`sort-option-${index}`} value={PropertiesSortBy[key]}>
        {PropertiesSortBy[key]}
      </option>
    )
  );
  return (
    <div className="input-group">
      <div className="input-group-append">
        <label className="input-group-text" htmlFor="properties-list-sortby">
          Sort by
        </label>
      </div>
      <select
        disabled={disabled}
        id="properties-list-sortby"
        onChange={onChangeCallback}
        className="custom-select"
      >
        {options}
      </select>
    </div>
  );
};
