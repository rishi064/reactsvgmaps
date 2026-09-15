import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapUnitedStatesStatePaths,
  unitedStatesStateViewBox,
} from "./data/UnitedStatesStatePaths.js";
import { unitedStatesStateNames } from "./data/UnitedStatesStateNames.js";
import { usAttribution } from "./data/attribution.js";

export function USStateMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapUnitedStatesStatePaths}
      regionNames={unitedStatesStateNames}
      viewBox={unitedStatesStateViewBox}
      fillRule="evenodd"
      attribution={usAttribution}
    />
  );
}
