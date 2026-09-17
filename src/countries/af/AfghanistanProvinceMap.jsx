import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAfghanistanProvincePaths,
  afghanistanProvinceViewBox,
} from "./data/AfghanistanProvincePaths.js";
import { afghanistanProvinceNames } from "./data/AfghanistanProvinceNames.js";
import { afghanistanAttribution } from "./data/attribution.js";

export function AfghanistanProvinceMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAfghanistanProvincePaths}
      regionNames={afghanistanProvinceNames}
      viewBox={afghanistanProvinceViewBox}
      fillRule="evenodd"
      attribution={afghanistanAttribution}
    />
  );
}
