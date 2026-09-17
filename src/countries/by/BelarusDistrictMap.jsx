import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapBelarusDistrictPaths,
  belarusDistrictViewBox,
} from "./data/BelarusDistrictPaths.js";
import { belarusDistrictNames } from "./data/BelarusDistrictNames.js";
import { belarusAttribution } from "./data/attribution.js";

export function BelarusDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapBelarusDistrictPaths}
      regionNames={belarusDistrictNames}
      viewBox={belarusDistrictViewBox}
      fillRule="evenodd"
      attribution={belarusAttribution}
    />
  );
}
