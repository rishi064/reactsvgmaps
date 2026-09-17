import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapEgyptDistrictPaths,
  egyptDistrictViewBox,
} from "./data/EgyptDistrictPaths.js";
import { egyptDistrictNames } from "./data/EgyptDistrictNames.js";
import { egyptAttribution } from "./data/attribution.js";

export function EgyptDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapEgyptDistrictPaths}
      regionNames={egyptDistrictNames}
      viewBox={egyptDistrictViewBox}
      fillRule="evenodd"
      attribution={egyptAttribution}
    />
  );
}
