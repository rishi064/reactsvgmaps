import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapScotlandCouncilAreaPaths,
  scotlandCouncilAreaViewBox,
} from "./data/ScotlandCouncilAreaPaths.js";
import { scotlandCouncilAreaNames } from "./data/ScotlandCouncilAreaNames.js";
import { scotlandAttribution } from "./data/attribution.js";

export function ScotlandCouncilAreaMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapScotlandCouncilAreaPaths}
      regionNames={scotlandCouncilAreaNames}
      viewBox={scotlandCouncilAreaViewBox}
      fillRule="evenodd"
      attribution={scotlandAttribution}
    />
  );
}
