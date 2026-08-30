import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapFranceDepartmentPaths,
  franceDepartmentViewBox,
} from "./data/FranceDepartmentPaths.js";
import { franceDepartmentNames } from "./data/FranceDepartmentNames.js";
import { franceAttribution } from "./data/attribution.js";

export function FranceDepartmentMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapFranceDepartmentPaths}
      regionNames={franceDepartmentNames}
      viewBox={franceDepartmentViewBox}
      fillRule="evenodd"
      attribution={franceAttribution}
    />
  );
}
