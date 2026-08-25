import React from "react";
import { BaseMap } from "../../BaseMap";
import { mapIndiaStatePaths } from "./data/IndiaMapStates.js";
import { states } from "./data/states.js";
import { indiaAttribution } from "./data/attribution.js";

// Scales strokeWidth into India's ~28-unit path space so 1 means the same here
// as on every other map. See project-info-docs/package.md.
const STROKE_SCALE = 0.03;

export function IndiaStateMap({ strokeWidth = 1, ...props }) {
  return (
    <BaseMap
      {...props}
      strokeWidth={strokeWidth * STROKE_SCALE}
      paths={mapIndiaStatePaths}
      regionNames={states}
      viewBox="0 0 27.5694 30.7106"
      // Island groups and enclaves are inner rings; only evenodd cuts them out.
      fillRule="evenodd"
      attribution={indiaAttribution}
    />
  );
}
