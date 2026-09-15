import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapJapanPrefecturePaths,
  japanPrefectureViewBox,
} from "./data/JapanPrefecturePaths.js";
import { japanPrefectureNames } from "./data/JapanPrefectureNames.js";
import { japanAttribution } from "./data/attribution.js";

export function JapanPrefectureMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapJapanPrefecturePaths}
      regionNames={japanPrefectureNames}
      viewBox={japanPrefectureViewBox}
      fillRule="evenodd"
      attribution={japanAttribution}
    />
  );
}
