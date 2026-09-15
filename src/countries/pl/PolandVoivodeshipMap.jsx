import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapPolandVoivodeshipPaths,
  polandVoivodeshipViewBox,
} from "./data/PolandVoivodeshipPaths.js";
import { polandVoivodeshipNames } from "./data/PolandVoivodeshipNames.js";
import { polandAttribution } from "./data/attribution.js";

export function PolandVoivodeshipMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapPolandVoivodeshipPaths}
      regionNames={polandVoivodeshipNames}
      viewBox={polandVoivodeshipViewBox}
      fillRule="evenodd"
      attribution={polandAttribution}
    />
  );
}
