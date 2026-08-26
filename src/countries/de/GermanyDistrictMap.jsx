import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapGermanyDistrictPaths,
  germanyDistrictViewBox,
} from "./data/GermanyDistrictPaths.js";
import { germanyDistrictNames } from "./data/GermanyDistrictNames.js";
import { germanyAttribution } from "./data/attribution.js";

export function GermanyDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapGermanyDistrictPaths}
      regionNames={germanyDistrictNames}
      viewBox={germanyDistrictViewBox}
      // North Sea and Baltic islands are inner rings; evenodd cuts them out.
      fillRule="evenodd"
      attribution={germanyAttribution}
    />
  );
}
