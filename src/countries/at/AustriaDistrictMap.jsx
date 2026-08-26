import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAustriaDistrictPaths,
  austriaDistrictViewBox,
} from "./data/AustriaDistrictPaths.js";
import { austriaDistrictNames } from "./data/AustriaDistrictNames.js";
import { austriaAttribution } from "./data/attribution.js";

export function AustriaDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAustriaDistrictPaths}
      regionNames={austriaDistrictNames}
      viewBox={austriaDistrictViewBox}
      fillRule="evenodd"
      attribution={austriaAttribution}
    />
  );
}
