import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapPolandCountyPaths,
  polandCountyViewBox,
} from "./data/PolandCountyPaths.js";
import { polandCountyNames } from "./data/PolandCountyNames.js";
import { polandAttribution } from "./data/attribution.js";

export function PolandCountyMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapPolandCountyPaths}
      regionNames={polandCountyNames}
      viewBox={polandCountyViewBox}
      fillRule="evenodd"
      attribution={polandAttribution}
    />
  );
}
