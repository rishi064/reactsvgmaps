import React from "react";
import { BaseMap } from "../../BaseMap";
import { mapNepalPaths } from "./data/NepalMap.js";
import { districts } from "./data/districts";

export function NepalDistrictMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapNepalPaths}
      regionNames={districts}
      viewBox="0 0 296.06867 141.31122"
      mapTransform="translate(-24.118069,-153.12788)"
    />
  );
}
