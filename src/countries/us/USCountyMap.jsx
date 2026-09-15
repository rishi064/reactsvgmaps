import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapUnitedStatesCountyPaths,
  unitedStatesCountyViewBox,
} from "./data/UnitedStatesCountyPaths.js";
import { unitedStatesCountyNames } from "./data/UnitedStatesCountyNames.js";
import { usAttribution } from "./data/attribution.js";

export function USCountyMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapUnitedStatesCountyPaths}
      regionNames={unitedStatesCountyNames}
      viewBox={unitedStatesCountyViewBox}
      fillRule="evenodd"
      attribution={usAttribution}
    />
  );
}
