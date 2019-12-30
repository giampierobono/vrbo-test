import { PropertiesListComponent } from "@vrbo/common-components";
import {
  getPropertiesList,
  getPropertiesListLoadingStatus,
  loadPropertiesAction
} from "@vrbo/store";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export const PropertiesListContainer = () => {
  const dispatch = useDispatch();
  const properties = useSelector(getPropertiesList, shallowEqual);
  const isLoading = useSelector(getPropertiesListLoadingStatus, shallowEqual);
  useEffect(() => {
    dispatch(loadPropertiesAction());
  }, [dispatch]);
  return (
    <PropertiesListComponent
      properties={properties}
      isPropertiesListLoading={isLoading}
    />
  );
};
