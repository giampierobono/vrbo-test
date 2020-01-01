import { PropertiesSortBy } from "@vrbo/data-models";
import React, { ChangeEvent } from "react";

export const SortBySelectBox = ({
  onChangeCallback,
  disabled
}: {
  onChangeCallback: (changeEvent: ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
}): React.ReactElement => {
  const options = Object.keys(PropertiesSortBy).map((key: string) => (
    <option value={PropertiesSortBy[key]}>{PropertiesSortBy[key]}</option>
  ));
  return (
    <select
      disabled={disabled}
      id="properties-list-sortby"
      onChange={onChangeCallback}
      className="custom-select"
    >
      {options}
    </select>
  );
};
