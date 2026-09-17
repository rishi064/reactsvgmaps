import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapEgyptGovernoratePaths,
  egyptGovernorateViewBox,
} from "./data/EgyptGovernoratePaths.js";
import { egyptGovernorateNames } from "./data/EgyptGovernorateNames.js";
import { egyptAttribution } from "./data/attribution.js";

export function EgyptGovernorateMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapEgyptGovernoratePaths}
      regionNames={egyptGovernorateNames}
      viewBox={egyptGovernorateViewBox}
      fillRule="evenodd"
      attribution={egyptAttribution}
    />
  );
}
