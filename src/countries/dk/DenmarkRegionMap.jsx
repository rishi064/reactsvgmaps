import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapDenmarkRegionPaths,
  denmarkRegionViewBox,
} from "./data/DenmarkRegionPaths.js";
import { denmarkRegionNames } from "./data/DenmarkRegionNames.js";
import { denmarkRegionAttribution } from "./data/attribution.js";

export function DenmarkRegionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapDenmarkRegionPaths}
      regionNames={denmarkRegionNames}
      viewBox={denmarkRegionViewBox}
      fillRule="evenodd"
      attribution={denmarkRegionAttribution}
    />
  );
}
