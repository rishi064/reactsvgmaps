import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapDenmarkMunicipalityPaths,
  denmarkMunicipalityViewBox,
} from "./data/DenmarkMunicipalityPaths.js";
import { denmarkMunicipalityNames } from "./data/DenmarkMunicipalityNames.js";
import { denmarkMunicipalityAttribution } from "./data/attribution.js";

export function DenmarkMunicipalityMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapDenmarkMunicipalityPaths}
      regionNames={denmarkMunicipalityNames}
      viewBox={denmarkMunicipalityViewBox}
      fillRule="evenodd"
      attribution={denmarkMunicipalityAttribution}
    />
  );
}
