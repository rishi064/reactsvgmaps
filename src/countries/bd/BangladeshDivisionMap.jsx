import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBangladeshDivisionPaths,
  bangladeshDivisionViewBox,
} from "./data/BangladeshDivisionPaths.js";
import { bangladeshDivisionNames } from "./data/BangladeshDivisionNames.js";
import { bangladeshAttribution } from "./data/attribution.js";

export function BangladeshDivisionMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBangladeshDivisionPaths}
      regionNames={bangladeshDivisionNames}
      viewBox={bangladeshDivisionViewBox}
      fillRule="evenodd"
      attribution={bangladeshAttribution}
    />
  );
}
