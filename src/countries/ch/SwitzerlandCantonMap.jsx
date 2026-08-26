import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapSwitzerlandCantonPaths,
  switzerlandCantonViewBox,
} from "./data/SwitzerlandCantonPaths.js";
import { switzerlandCantonNames } from "./data/SwitzerlandCantonNames.js";
import { switzerlandAttribution } from "./data/attribution.js";

export function SwitzerlandCantonMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapSwitzerlandCantonPaths}
      regionNames={switzerlandCantonNames}
      viewBox={switzerlandCantonViewBox}
      fillRule="evenodd"
      attribution={switzerlandAttribution}
    />
  );
}
