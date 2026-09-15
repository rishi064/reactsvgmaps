import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapFinlandMunicipalityPaths,
  finlandMunicipalityViewBox,
} from "./data/FinlandMunicipalityPaths.js";
import { finlandMunicipalityNames } from "./data/FinlandMunicipalityNames.js";
import { finlandAttribution } from "./data/attribution.js";

export function FinlandMunicipalityMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapFinlandMunicipalityPaths}
      regionNames={finlandMunicipalityNames}
      viewBox={finlandMunicipalityViewBox}
      fillRule="evenodd"
      attribution={finlandAttribution}
    />
  );
}
