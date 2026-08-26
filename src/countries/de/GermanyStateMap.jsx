import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapGermanyStatePaths,
  germanyStateViewBox,
} from "./data/GermanyStatePaths.js";
import { germanyStateNames } from "./data/GermanyStateNames.js";
import { germanyAttribution } from "./data/attribution.js";

export function GermanyStateMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapGermanyStatePaths}
      regionNames={germanyStateNames}
      viewBox={germanyStateViewBox}
      // North Sea and Baltic islands are inner rings; evenodd cuts them out.
      fillRule="evenodd"
      attribution={germanyAttribution}
    />
  );
}
