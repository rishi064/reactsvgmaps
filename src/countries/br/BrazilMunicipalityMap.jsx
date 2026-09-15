import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBrazilMunicipalityPaths,
  brazilMunicipalityViewBox,
} from "./data/BrazilMunicipalityPaths.js";
import { brazilMunicipalityNames } from "./data/BrazilMunicipalityNames.js";
import { brazilAttribution } from "./data/attribution.js";

export function BrazilMunicipalityMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBrazilMunicipalityPaths}
      regionNames={brazilMunicipalityNames}
      viewBox={brazilMunicipalityViewBox}
      fillRule="evenodd"
      attribution={brazilAttribution}
    />
  );
}
