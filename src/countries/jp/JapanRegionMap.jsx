import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapJapanRegionPaths,
  japanRegionViewBox,
} from "./data/JapanRegionPaths.js";
import { japanRegionNames } from "./data/JapanRegionNames.js";
import { japanAttribution } from "./data/attribution.js";

export function JapanRegionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapJapanRegionPaths}
      regionNames={japanRegionNames}
      viewBox={japanRegionViewBox}
      fillRule="evenodd"
      attribution={japanAttribution}
    />
  );
}
