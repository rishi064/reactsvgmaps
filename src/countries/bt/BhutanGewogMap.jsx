import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBhutanGewogPaths,
  bhutanGewogViewBox,
} from "./data/BhutanGewogPaths.js";
import { bhutanGewogNames } from "./data/BhutanGewogNames.js";
import { bhutanAttribution } from "./data/attribution.js";

export function BhutanGewogMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBhutanGewogPaths}
      regionNames={bhutanGewogNames}
      viewBox={bhutanGewogViewBox}
      fillRule="evenodd"
      attribution={bhutanAttribution}
    />
  );
}
