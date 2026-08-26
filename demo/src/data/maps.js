import {
  NepalProvinceMap,
  NepalDistrictMap,
  nepalProvinces,
  nepalDistricts,
} from "react-svg-maps/np";
import { IndiaStateMap, indiaStates } from "react-svg-maps/in";
import {
  GermanyStateMap,
  GermanyDistrictMap,
  germanyStates,
  germanyDistricts,
} from "react-svg-maps/de";

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
  de: {
    label: "Germany",
    maps: {
      state: {
        label: "Bundesländer (States)",
        Component: GermanyStateMap,
        names: germanyStates,
        colorMap: { Bayern: "blue", Hessen: "green", Saarland: "red" },
      },
      district: {
        label: "Kreise (Districts)",
        Component: GermanyDistrictMap,
        names: germanyDistricts,
        colorMap: { Konstanz: "blue", Hamburg: "green", Ahrweiler: "red" },
      },
    },
  },
};
