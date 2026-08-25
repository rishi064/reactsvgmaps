import {
  NepalProvinceMap,
  NepalDistrictMap,
  nepalProvinces,
  nepalDistricts,
} from "react-svg-maps/np";
import { IndiaStateMap, indiaStates } from "react-svg-maps/in";

// Maps available in the playground, keyed by package subpath.
export const COUNTRIES = {
  np: {
    label: "Nepal",
    maps: {
      province: {
        label: "Province Map",
        Component: NepalProvinceMap,
        names: nepalProvinces,
        colorMap: { Koshi: "blue", Lumbini: "green" },
      },
      district: {
        label: "District Map",
        Component: NepalDistrictMap,
        names: nepalDistricts,
        colorMap: { Palpa: "blue", Kathmandu: "red", Jhapa: "yellow" },
      },
    },
  },
  in: {
    label: "India",
    maps: {
      state: {
        label: "State Map",
        Component: IndiaStateMap,
        names: indiaStates,
        colorMap: { Kerala: "blue", Rajasthan: "green", Sikkim: "red" },
      },
    },
  },
};
