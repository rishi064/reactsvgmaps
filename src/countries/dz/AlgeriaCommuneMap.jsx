import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAlgeriaCommunePaths,
  algeriaCommuneViewBox,
} from "./data/AlgeriaCommunePaths.js";
import { algeriaCommuneNames } from "./data/AlgeriaCommuneNames.js";
import { algeriaAttribution } from "./data/attribution.js";

export function AlgeriaCommuneMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAlgeriaCommunePaths}
      regionNames={algeriaCommuneNames}
      viewBox={algeriaCommuneViewBox}
      fillRule="evenodd"
      attribution={algeriaAttribution}
    />
  );
}
