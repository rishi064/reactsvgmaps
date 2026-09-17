import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBangladeshDistrictPaths,
  bangladeshDistrictViewBox,
} from "./data/BangladeshDistrictPaths.js";
import { bangladeshDistrictNames } from "./data/BangladeshDistrictNames.js";
import { bangladeshAttribution } from "./data/attribution.js";

export function BangladeshDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBangladeshDistrictPaths}
      regionNames={bangladeshDistrictNames}
      viewBox={bangladeshDistrictViewBox}
      fillRule="evenodd"
      attribution={bangladeshAttribution}
    />
  );
}
