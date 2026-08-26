import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAustriaStatePaths,
  austriaStateViewBox,
} from "./data/AustriaStatePaths.js";
import { austriaStateNames } from "./data/AustriaStateNames.js";
import { austriaAttribution } from "./data/attribution.js";

export function AustriaStateMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAustriaStatePaths}
      regionNames={austriaStateNames}
      viewBox={austriaStateViewBox}
      fillRule="evenodd"
      attribution={austriaAttribution}
    />
  );
}
