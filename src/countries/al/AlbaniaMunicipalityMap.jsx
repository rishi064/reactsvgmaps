import React from "react";
import { BaseMap } from "../../BaseMap";
import {
  mapAlbaniaMunicipalityPaths,
  albaniaMunicipalityViewBox,
} from "./data/AlbaniaMunicipalityPaths.js";
import { albaniaMunicipalityNames } from "./data/AlbaniaMunicipalityNames.js";
import { albaniaAttribution } from "./data/attribution.js";

export function AlbaniaMunicipalityMap(props) {
  return (
    <BaseMap
      {...props}
      paths={mapAlbaniaMunicipalityPaths}
      regionNames={albaniaMunicipalityNames}
      viewBox={albaniaMunicipalityViewBox}
      fillRule="evenodd"
      attribution={albaniaAttribution}
    />
  );
}
