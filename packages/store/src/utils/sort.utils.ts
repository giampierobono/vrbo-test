import { PropertiesSortByConfig } from "@vrbo/data-models";
import { ifElse, negate, prop, sortBy } from "ramda";
import { pipe } from "rxjs";

export const sortByConfig = (sortConfig: PropertiesSortByConfig) =>
  ifElse(
    () => sortConfig.asc,
    sortBy(prop(sortConfig.prop)),
    sortBy(pipe(prop(sortConfig.prop), negate))
  );
