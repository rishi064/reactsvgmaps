import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapFranceRegionPaths,
  franceRegionViewBox,
} from "./data/FranceRegionPaths.js";
import { franceRegionNames } from "./data/FranceRegionNames.js";
import { franceAttribution } from "./data/attribution.js";

export function FranceRegionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapFranceRegionPaths}
      regionNames={franceRegionNames}
      viewBox={franceRegionViewBox}
      fillRule="evenodd"
      attribution={franceAttribution}
    />
  );
}
