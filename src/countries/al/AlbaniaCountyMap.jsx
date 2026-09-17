import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAlbaniaCountyPaths,
  albaniaCountyViewBox,
} from "./data/AlbaniaCountyPaths.js";
import { albaniaCountyNames } from "./data/AlbaniaCountyNames.js";
import { albaniaAttribution } from "./data/attribution.js";

export function AlbaniaCountyMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAlbaniaCountyPaths}
      regionNames={albaniaCountyNames}
      viewBox={albaniaCountyViewBox}
      fillRule="evenodd"
      attribution={albaniaAttribution}
    />
  );
}
