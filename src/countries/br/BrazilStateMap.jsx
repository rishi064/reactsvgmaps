import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBrazilStatePaths,
  brazilStateViewBox,
} from "./data/BrazilStatePaths.js";
import { brazilStateNames } from "./data/BrazilStateNames.js";
import { brazilAttribution } from "./data/attribution.js";

export function BrazilStateMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBrazilStatePaths}
      regionNames={brazilStateNames}
      viewBox={brazilStateViewBox}
      fillRule="evenodd"
      attribution={brazilAttribution}
    />
  );
}
