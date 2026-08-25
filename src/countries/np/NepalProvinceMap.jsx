import React from "react";
import { BaseMap } from "../../BaseMap";
import { mapNepalProvincePaths } from "./data/NepalMapProvince.js";
import { provinces } from "./data/provinces.js";
import { nepalAttribution } from "./data/attribution.js";
import { NEPAL_TRANSFORM, NEPAL_VIEWBOX } from "./geometry.js";

export function NepalProvinceMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapNepalProvincePaths}
      regionNames={provinces}
      viewBox={NEPAL_VIEWBOX}
      mapTransform={NEPAL_TRANSFORM}
      attribution={nepalAttribution}
    />
  );
}
