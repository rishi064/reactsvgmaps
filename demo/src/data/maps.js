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
import {
  FranceRegionMap,
  FranceDepartmentMap,
  franceRegions,
  franceDepartments,
} from "react-svg-maps/fr";
import {
  DenmarkRegionMap,
  DenmarkMunicipalityMap,
  denmarkRegions,
  denmarkMunicipalities,
} from "react-svg-maps/dk";
import {
  PolandVoivodeshipMap,
  PolandCountyMap,
  polandVoivodeships,
  polandCounties,
} from "react-svg-maps/pl";
import {
  ScotlandCouncilAreaMap,
  scotlandCouncilAreas,
} from "react-svg-maps/sct";
import {
  FinlandRegionMap,
  FinlandMunicipalityMap,
  finlandRegions,
  finlandMunicipalities,
} from "react-svg-maps/fi";
import {
  JapanRegionMap,
  JapanPrefectureMap,
  japanRegions,
  japanPrefectures,
} from "react-svg-maps/jp";
import { RussiaSubjectMap, russiaSubjects } from "react-svg-maps/ru";
import {
  BrazilStateMap,
  BrazilMunicipalityMap,
  brazilStates,
  brazilMunicipalities,
} from "react-svg-maps/br";
import { USStateMap, USCountyMap, usStates, usCounties } from "react-svg-maps/us";
import {
  AfghanistanProvinceMap,
  AfghanistanDistrictMap,
  afghanistanProvinces,
  afghanistanDistricts,
} from "react-svg-maps/af";
import {
  AlbaniaCountyMap,
  AlbaniaMunicipalityMap,
  albaniaCounties,
  albaniaMunicipalities,
} from "react-svg-maps/al";
import {
  AlgeriaWilayaMap,
  AlgeriaCommuneMap,
  algeriaWilayas,
  algeriaCommunes,
} from "react-svg-maps/dz";
import { AndorraParishMap, andorraParishes } from "react-svg-maps/ad";
import {
  BhutanDzongkhagMap,
  BhutanGewogMap,
  bhutanDzongkhags,
  bhutanGewogs,
} from "react-svg-maps/bt";
import { AzerbaijanDistrictMap, azerbaijanDistricts } from "react-svg-maps/az";
import {
  BelarusRegionMap,
  BelarusDistrictMap,
  belarusRegions,
  belarusDistricts,
} from "react-svg-maps/by";
import {
  EgyptGovernorateMap,
  EgyptDistrictMap,
  egyptGovernorates,
  egyptDistricts,
} from "react-svg-maps/eg";
import {
  BangladeshDivisionMap,
  BangladeshDistrictMap,
  bangladeshDivisions,
  bangladeshDistricts,
} from "react-svg-maps/bd";

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
  fr: {
    label: "France",
    maps: {
      region: {
        label: "Régions",
        Component: FranceRegionMap,
        names: franceRegions,
        colorMap: {
          Bretagne: "blue",
          Occitanie: "green",
          "Île-de-France": "red",
        },
      },
      department: {
        label: "Départements",
        Component: FranceDepartmentMap,
        names: franceDepartments,
        colorMap: { Paris: "red", Gironde: "blue", "La Réunion": "green" },
      },
    },
  },
  dk: {
    label: "Denmark",
    maps: {
      region: {
        label: "Regioner (Regions)",
        Component: DenmarkRegionMap,
        names: denmarkRegions,
        colorMap: { Hovedstaden: "red", Midtjylland: "blue", Sjælland: "green" },
      },
      municipality: {
        label: "Kommuner (Municipalities)",
        Component: DenmarkMunicipalityMap,
        names: denmarkMunicipalities,
        colorMap: { København: "red", Aarhus: "blue", Bornholm: "green" },
      },
    },
  },
  pl: {
    label: "Poland",
    maps: {
      voivodeship: {
        label: "Województwa (Voivodeships)",
        Component: PolandVoivodeshipMap,
        names: polandVoivodeships,
        colorMap: {
          Mazowieckie: "red",
          Małopolskie: "blue",
          Pomorskie: "green",
        },
      },
      county: {
        label: "Powiaty (Counties)",
        Component: PolandCountyMap,
        names: polandCounties,
        colorMap: {
          Warszawa: "red",
          Kraków: "blue",
          "powiat tatrzański": "green",
        },
      },
    },
  },
  fi: {
    label: "Finland",
    maps: {
      region: {
        label: "Maakunnat (Regions)",
        Component: FinlandRegionMap,
        names: finlandRegions,
        colorMap: { Uusimaa: "red", Lappi: "blue", Åland: "green" },
      },
      municipality: {
        label: "Kunnat (Municipalities)",
        Component: FinlandMunicipalityMap,
        names: finlandMunicipalities,
        colorMap: { Helsinki: "red", Rovaniemi: "blue", Tampere: "green" },
      },
    },
  },
  jp: {
    label: "Japan",
    maps: {
      region: {
        label: "Regions",
        Component: JapanRegionMap,
        names: japanRegions,
        colorMap: { Kanto: "red", Kansai: "blue", Hokkaido: "green" },
      },
      prefecture: {
        label: "Prefectures",
        Component: JapanPrefectureMap,
        names: japanPrefectures,
        colorMap: { Tokyo: "red", Osaka: "blue", Okinawa: "green" },
      },
    },
  },
  ru: {
    label: "Russia",
    maps: {
      subject: {
        label: "Federal Subjects",
        Component: RussiaSubjectMap,
        names: russiaSubjects,
        colorMap: { Moscow: "red", Tatarstan: "blue", "Sakha Republic": "green" },
      },
    },
  },
  br: {
    label: "Brazil",
    maps: {
      state: {
        label: "Estados (Federative Units)",
        Component: BrazilStateMap,
        names: brazilStates,
        colorMap: { "São Paulo": "red", Amazonas: "blue", Bahia: "green" },
      },
      municipality: {
        label: "Municípios (Municipalities)",
        Component: BrazilMunicipalityMap,
        names: brazilMunicipalities,
        colorMap: { "São Paulo": "red", Manaus: "blue", "Belo Horizonte": "green" },
      },
    },
  },
  us: {
    label: "United States",
    maps: {
      state: {
        label: "States",
        Component: USStateMap,
        names: usStates,
        colorMap: { Texas: "red", California: "blue", Alaska: "green" },
      },
      county: {
        label: "Counties",
        Component: USCountyMap,
        names: usCounties,
        colorMap: {
          "Harris, Texas": "red",
          "Los Angeles, California": "blue",
          "District of Columbia": "green",
        },
      },
    },
  },
  af: {
    label: "Afghanistan",
    maps: {
      province: {
        label: "Provinces",
        Component: AfghanistanProvinceMap,
        names: afghanistanProvinces,
        colorMap: { Kabul: "red", Hirat: "blue", Kandahar: "green" },
      },
      district: {
        label: "Districts",
        Component: AfghanistanDistrictMap,
        names: afghanistanDistricts,
        colorMap: {
          Kabul: "red",
          "Fayzabad (Badakhshan)": "blue",
          Zaranj: "green",
        },
      },
    },
  },
  al: {
    label: "Albania",
    maps: {
      county: {
        label: "Qarqe (Counties)",
        Component: AlbaniaCountyMap,
        names: albaniaCounties,
        colorMap: { Tiranë: "red", Shkodër: "blue", Vlorë: "green" },
      },
      municipality: {
        label: "Bashkitë (Municipalities)",
        Component: AlbaniaMunicipalityMap,
        names: albaniaMunicipalities,
        colorMap: { Tiranë: "red", Sarandë: "blue", Pustec: "green" },
      },
    },
  },
  dz: {
    label: "Algeria",
    maps: {
      wilaya: {
        label: "Wilayas",
        Component: AlgeriaWilayaMap,
        names: algeriaWilayas,
        colorMap: { Alger: "red", Oran: "blue", Tamanrasset: "green" },
      },
      commune: {
        label: "Communes",
        Component: AlgeriaCommuneMap,
        names: algeriaCommunes,
        colorMap: { Oran: "red", Constantine: "blue", Timimoun: "green" },
      },
    },
  },
  ad: {
    label: "Andorra",
    maps: {
      parish: {
        label: "Parròquies (Parishes)",
        Component: AndorraParishMap,
        names: andorraParishes,
        colorMap: {
          "Andorra la Vella": "red",
          Canillo: "blue",
          Ordino: "green",
        },
      },
    },
  },
  bt: {
    label: "Bhutan",
    maps: {
      dzongkhag: {
        label: "Dzongkhags (Districts)",
        Component: BhutanDzongkhagMap,
        names: bhutanDzongkhags,
        colorMap: { Thimphu: "red", Paro: "blue", Bumthang: "green" },
      },
      gewog: {
        label: "Gewogs (Blocks)",
        Component: BhutanGewogMap,
        names: bhutanGewogs,
        colorMap: { Chang: "red", Kawang: "blue", Lingzhi: "green" },
      },
    },
  },
  az: {
    label: "Azerbaijan",
    maps: {
      district: {
        label: "Rayonlar (Districts)",
        Component: AzerbaijanDistrictMap,
        names: azerbaijanDistricts,
        colorMap: { Baku: "red", Ganja: "blue", Babek: "green" },
      },
    },
  },
  by: {
    label: "Belarus",
    maps: {
      region: {
        label: "Voblasts (Regions)",
        Component: BelarusRegionMap,
        names: belarusRegions,
        colorMap: { "Minsk City": "red", Brest: "blue", Gomel: "green" },
      },
      district: {
        label: "Raions (Districts)",
        Component: BelarusDistrictMap,
        names: belarusDistricts,
        colorMap: { Baranovichi: "red", Bobrujsk: "blue", Braslav: "green" },
      },
    },
  },
  eg: {
    label: "Egypt",
    maps: {
      governorate: {
        label: "Governorates",
        Component: EgyptGovernorateMap,
        names: egyptGovernorates,
        colorMap: { Cairo: "red", Alexandria: "blue", Aswan: "green" },
      },
      district: {
        label: "Marakiz & Aqsam (Districts)",
        Component: EgyptDistrictMap,
        names: egyptDistricts,
        colorMap: {
          Abdin: "red",
          "Nasr City": "blue",
          "Markaz Aswan (Aswan)": "green",
        },
      },
    },
  },
  bd: {
    label: "Bangladesh",
    maps: {
      division: {
        label: "Divisions",
        Component: BangladeshDivisionMap,
        names: bangladeshDivisions,
        colorMap: { Dhaka: "red", Chattogram: "blue", Sylhet: "green" },
      },
      district: {
        label: "Districts",
        Component: BangladeshDistrictMap,
        names: bangladeshDistricts,
        colorMap: {
          Dhaka: "red",
          "Cox's Bazar": "blue",
          Rangamati: "green",
        },
      },
    },
  },
  sct: {
    label: "Scotland",
    maps: {
      councilArea: {
        label: "Council Areas",
        Component: ScotlandCouncilAreaMap,
        names: scotlandCouncilAreas,
        colorMap: {
          Highland: "green",
          "City of Edinburgh": "red",
          "Shetland Islands": "blue",
        },
      },
    },
  },
};
