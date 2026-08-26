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
import {
  AustriaStateMap,
  AustriaDistrictMap,
  austriaStates,
  austriaDistricts,
} from "react-svg-maps/at";
import { SwitzerlandCantonMap, switzerlandCantons } from "react-svg-maps/ch";

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
  at: {
    label: "Austria",
    maps: {
      state: {
        label: "Bundesländer (States)",
        Component: AustriaStateMap,
        names: austriaStates,
        colorMap: { Tirol: "blue", Steiermark: "green", Wien: "red" },
      },
      district: {
        label: "Bezirke (Districts)",
        Component: AustriaDistrictMap,
        names: austriaDistricts,
        colorMap: { Liezen: "blue", Bregenz: "green", Graz: "red" },
      },
    },
  },
  ch: {
    label: "Switzerland",
    maps: {
      canton: {
        label: "Kantone (Cantons)",
        Component: SwitzerlandCantonMap,
        names: switzerlandCantons,
        colorMap: { Graubünden: "blue", Ticino: "green", "Basel-Stadt": "red" },
      },
    },
  },
};
