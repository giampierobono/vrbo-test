import { SortBySelectBox } from "@vrbo/common-components";
import { PropertiesSortBy } from "@vrbo/data-models";
import {
  getPropertiesListLoadingStatus,
  setNewPropertiesSortAction
} from "@vrbo/store";
import React, { ChangeEvent } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export const SortBySelectBoxContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getPropertiesListLoadingStatus, shallowEqual);
  return (
    <SortBySelectBox
      disabled={isLoading}
      onChangeCallback={(changeEvent: ChangeEvent<HTMLSelectElement>) =>
        dispatch(
          setNewPropertiesSortAction(
            changeEvent.target.value as PropertiesSortBy
          )
        )
      }
    />
  );
};
