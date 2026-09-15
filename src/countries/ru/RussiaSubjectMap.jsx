import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapRussiaSubjectPaths,
  russiaSubjectViewBox,
} from "./data/RussiaSubjectPaths.js";
import { russiaSubjectNames } from "./data/RussiaSubjectNames.js";
import { russiaAttribution } from "./data/attribution.js";

export function RussiaSubjectMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapRussiaSubjectPaths}
      regionNames={russiaSubjectNames}
      viewBox={russiaSubjectViewBox}
      fillRule="evenodd"
      attribution={russiaAttribution}
    />
  );
}
