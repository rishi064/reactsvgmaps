import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAlgeriaWilayaPaths,
  algeriaWilayaViewBox,
} from "./data/AlgeriaWilayaPaths.js";
import { algeriaWilayaNames } from "./data/AlgeriaWilayaNames.js";
import { algeriaAttribution } from "./data/attribution.js";

export function AlgeriaWilayaMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAlgeriaWilayaPaths}
      regionNames={algeriaWilayaNames}
      viewBox={algeriaWilayaViewBox}
      fillRule="evenodd"
      attribution={algeriaAttribution}
    />
  );
}
