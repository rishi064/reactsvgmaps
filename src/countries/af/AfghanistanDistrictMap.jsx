import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAfghanistanDistrictPaths,
  afghanistanDistrictViewBox,
} from "./data/AfghanistanDistrictPaths.js";
import { afghanistanDistrictNames } from "./data/AfghanistanDistrictNames.js";
import { afghanistanAttribution } from "./data/attribution.js";

export function AfghanistanDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAfghanistanDistrictPaths}
      regionNames={afghanistanDistrictNames}
      viewBox={afghanistanDistrictViewBox}
      fillRule="evenodd"
      attribution={afghanistanAttribution}
    />
  );
}
