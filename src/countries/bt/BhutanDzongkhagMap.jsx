import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBhutanDzongkhagPaths,
  bhutanDzongkhagViewBox,
} from "./data/BhutanDzongkhagPaths.js";
import { bhutanDzongkhagNames } from "./data/BhutanDzongkhagNames.js";
import { bhutanAttribution } from "./data/attribution.js";

export function BhutanDzongkhagMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBhutanDzongkhagPaths}
      regionNames={bhutanDzongkhagNames}
      viewBox={bhutanDzongkhagViewBox}
      fillRule="evenodd"
      attribution={bhutanAttribution}
    />
  );
}
