import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapFinlandRegionPaths,
  finlandRegionViewBox,
} from "./data/FinlandRegionPaths.js";
import { finlandRegionNames } from "./data/FinlandRegionNames.js";
import { finlandAttribution } from "./data/attribution.js";

export function FinlandRegionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapFinlandRegionPaths}
      regionNames={finlandRegionNames}
      viewBox={finlandRegionViewBox}
      fillRule="evenodd"
      attribution={finlandAttribution}
    />
  );
}
