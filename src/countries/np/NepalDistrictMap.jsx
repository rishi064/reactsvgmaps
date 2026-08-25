import React from "react";
import { BaseMap } from "../../BaseMap";
import { mapNepalPaths } from "./data/NepalMap.js";
import { districts } from "./data/districts";
import { nepalAttribution } from "./data/attribution.js";
import { NEPAL_TRANSFORM, NEPAL_VIEWBOX } from "./geometry.js";

export function NepalDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapNepalPaths}
      regionNames={districts}
      viewBox={NEPAL_VIEWBOX}
      mapTransform={NEPAL_TRANSFORM}
      attribution={nepalAttribution}
    />
  );
}
