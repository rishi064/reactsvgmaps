import React from "react";
import { BaseMap } from "../../BaseMap";
import { mapNepalProvincePaths } from "./data/NepalMapProvince.js";
import { provinces } from "./data/provinces.js";

export function NepalProvinceMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapNepalProvincePaths}
      regionNames={provinces}
      viewBox="0 0 296.06867 141.31122"
      mapTransform="translate(-24.118069,-153.12788)"
    />
  );
}
