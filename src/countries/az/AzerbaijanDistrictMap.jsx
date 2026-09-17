import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAzerbaijanDistrictPaths,
  azerbaijanDistrictViewBox,
} from "./data/AzerbaijanDistrictPaths.js";
import { azerbaijanDistrictNames } from "./data/AzerbaijanDistrictNames.js";
import { azerbaijanAttribution } from "./data/attribution.js";

export function AzerbaijanDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAzerbaijanDistrictPaths}
      regionNames={azerbaijanDistrictNames}
      viewBox={azerbaijanDistrictViewBox}
      fillRule="evenodd"
      attribution={azerbaijanAttribution}
    />
  );
}
