import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBelarusRegionPaths,
  belarusRegionViewBox,
} from "./data/BelarusRegionPaths.js";
import { belarusRegionNames } from "./data/BelarusRegionNames.js";
import { belarusAttribution } from "./data/attribution.js";

export function BelarusRegionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBelarusRegionPaths}
      regionNames={belarusRegionNames}
      viewBox={belarusRegionViewBox}
      fillRule="evenodd"
      attribution={belarusAttribution}
    />
  );
}
