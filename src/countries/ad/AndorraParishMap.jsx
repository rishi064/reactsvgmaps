import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAndorraParishPaths,
  andorraParishViewBox,
} from "./data/AndorraParishPaths.js";
import { andorraParishNames } from "./data/AndorraParishNames.js";
import { andorraAttribution } from "./data/attribution.js";

export function AndorraParishMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAndorraParishPaths}
      regionNames={andorraParishNames}
      viewBox={andorraParishViewBox}
      fillRule="evenodd"
      attribution={andorraAttribution}
    />
  );
}
