# react-svg-maps

A React component library for interactive SVG maps, covering 23 countries so far — each a separate import path, listed under [Components](#components).

**Live Demo:** [https://reactsvgmaps.com](https://reactsvgmaps.com)
**GitHub:** [https://github.com/rishi064/reactsvgmaps](https://github.com/rishi064/reactsvgmaps)

## Installation

```bash
npm install react-svg-maps
```

## Usage

```jsx
import { NepalDistrictMap, NepalProvinceMap } from "react-svg-maps/np";

function App() {
  const handleSelect = (region) => {
    if (region) {
      console.log(`Selected: ${region.name} (ID: ${region.id})`);
    }
  };

  return (
    <div>
      <NepalDistrictMap
        color="#e2e8f0"
        hoverColor="#93c5fd"
        activeColor="#3b82f6"
        onSelect={handleSelect}
      />
    </div>
  );
}
```

## Components

Each country is a separate import path, so your bundler only pulls in the map data you actually use.

| Country                            | Import               | Maps                                       |
| :--------------------------------- | :------------------- | :----------------------------------------- |
| [Afghanistan](#react-svg-mapsaf)   | `react-svg-maps/af`  | Provinces · Districts                      |
| [Albania](#react-svg-mapsal)       | `react-svg-maps/al`  | Qarqe (counties) · Bashki (municipalities) |
| [Algeria](#react-svg-mapsdz)       | `react-svg-maps/dz`  | Wilayas · Communes                         |
| [Andorra](#react-svg-mapsad)       | `react-svg-maps/ad`  | Parròquies (parishes)                      |
| [Austria](#react-svg-mapsat)       | `react-svg-maps/at`  | Bundesländer · Bezirke                     |
| [Azerbaijan](#react-svg-mapsaz)    | `react-svg-maps/az`  | Rayons and cities                          |
| [Bangladesh](#react-svg-mapsbd)    | `react-svg-maps/bd`  | Divisions · Districts                      |
| [Belarus](#react-svg-mapsby)       | `react-svg-maps/by`  | Voblasts · Raions                          |
| [Bhutan](#react-svg-mapsbt)        | `react-svg-maps/bt`  | Dzongkhags · Gewogs                        |
| [Brazil](#react-svg-mapsbr)        | `react-svg-maps/br`  | States · Municipalities                    |
| [Denmark](#react-svg-mapsdk)       | `react-svg-maps/dk`  | Regioner · Kommuner                        |
| [Egypt](#react-svg-mapseg)         | `react-svg-maps/eg`  | Governorates · Marakiz and aqsam           |
| [Finland](#react-svg-mapsfi)       | `react-svg-maps/fi`  | Maakunnat · Kunnat                         |
| [France](#react-svg-mapsfr)        | `react-svg-maps/fr`  | Régions · Départements                     |
| [Germany](#react-svg-mapsde)       | `react-svg-maps/de`  | Bundesländer · Kreise                      |
| [India](#react-svg-mapsin)         | `react-svg-maps/in`  | States and union territories               |
| [Japan](#react-svg-mapsjp)         | `react-svg-maps/jp`  | Regions · Prefectures                      |
| [Nepal](#react-svg-mapsnp)         | `react-svg-maps/np`  | Provinces · Districts                      |
| [Poland](#react-svg-mapspl)        | `react-svg-maps/pl`  | Województwa · Powiaty                      |
| [Russia](#react-svg-mapsru)        | `react-svg-maps/ru`  | Federal subjects                           |
| [Scotland](#react-svg-mapssct)     | `react-svg-maps/sct` | Council areas                              |
| [Switzerland](#react-svg-mapsch)   | `react-svg-maps/ch`  | Cantons                                    |
| [United States](#react-svg-mapsus) | `react-svg-maps/us`  | States · Counties                          |

### `react-svg-maps/np`

| Export                 | Description                                            |
| :--------------------- | :----------------------------------------------------- |
| `<NepalDistrictMap />` | Interactive map of Nepal's 77 districts.               |
| `<NepalProvinceMap />` | Interactive map of Nepal's 7 provinces.                |
| `nepalDistricts`       | `string[]` of the 77 district names, in path-id order. |
| `nepalProvinces`       | `string[]` of the 7 province names, in path-id order.  |

### `react-svg-maps/in`

| Export              | Description                                                 |
| :------------------ | :---------------------------------------------------------- |
| `<IndiaStateMap />` | Interactive map of India's 36 states and union territories. |
| `indiaStates`       | `string[]` of the 36 state/UT names, in path-id order.      |

### `react-svg-maps/de`

| Export                   | Description                                              |
| :----------------------- | :------------------------------------------------------- |
| `<GermanyStateMap />`    | Interactive map of Germany's 16 Bundesländer.            |
| `<GermanyDistrictMap />` | Interactive map of Germany's 401 Kreise.                 |
| `germanyStates`          | `string[]` of the 16 Bundesland names, in path-id order. |
| `germanyDistricts`       | `string[]` of the 401 Kreis names, in path-id order.     |

### `react-svg-maps/at`

| Export                   | Description                                             |
| :----------------------- | :------------------------------------------------------ |
| `<AustriaStateMap />`    | Interactive map of Austria's 9 Bundesländer.            |
| `<AustriaDistrictMap />` | Interactive map of Austria's 94 Bezirke.                |
| `austriaStates`          | `string[]` of the 9 Bundesland names, in path-id order. |
| `austriaDistricts`       | `string[]` of the 94 Bezirk names, in path-id order.    |

Three Bezirke share a name with the Statutarstadt they surround, so they carry a
suffix: `"Krems (Land)"`, `"St. Pölten (Land)"` and `"Wiener Neustadt (Land)"`.
The cities themselves are `"Krems an der Donau"`, `"St. Pölten"` and
`"Wiener Neustadt"`.

### `react-svg-maps/ch`

| Export                     | Description                                          |
| :------------------------- | :--------------------------------------------------- |
| `<SwitzerlandCantonMap />` | Interactive map of Switzerland's 26 cantons.         |
| `switzerlandCantons`       | `string[]` of the 26 canton names, in path-id order. |

Cantons are named in their own official language — `"Ticino"`, `"Genève"`,
`"Graubünden"`, not the English or German exonyms. Switzerland stops at canton
level: its districts vary too much between cantons to make one map meaningful.

### `react-svg-maps/fr`

| Export                    | Description                                                |
| :------------------------ | :--------------------------------------------------------- |
| `<FranceRegionMap />`     | Interactive map of France's 18 régions.                    |
| `<FranceDepartmentMap />` | Interactive map of France's 101 départements.              |
| `franceRegions`           | `string[]` of the 18 région names, in path-id order.       |
| `franceDepartments`       | `string[]` of the 101 département names, in path-id order. |

Régions are the post-2016 ones: `"Grand Est"`, `"Occitanie"`,
`"Nouvelle-Aquitaine"` and the rest, thirteen in metropolitan France and five
overseas. The five overseas ones — `"Guadeloupe"`, `"Martinique"`, `"Guyane"`,
`"La Réunion"` and `"Mayotte"` — are each a département as well, and carry the
same name in both maps.

Both maps are drawn on the same canvas, overseas included: those five are insets
down the sides at their own scale, which is how French official maps show them.
The two maps line up region for département, so a hover on one can highlight the
other.

Paris and the three inner-ring départements around it — `"Hauts-de-Seine"`,
`"Seine-Saint-Denis"`, `"Val-de-Marne"` — are a dozen units across on a
1000-unit map, so they are small targets at default `strokeWidth`. The source's
magnified inset of them is not part of the data.

Names are the official French ones, accents included: `"Côte-d'Or"`, `"Hautes-Pyrénées"`,
`"Territoire de Belfort"`. Corsica is its two départements, `"Corse-du-Sud"` and
`"Haute-Corse"`. `"Rhône"` covers the Métropole de Lyon as well — the source
predates the 2015 split, and INSEE's separate `69M` and `69D` codes have no
outline of their own here.

### `react-svg-maps/dk`

| Export                       | Description                                           |
| :--------------------------- | :---------------------------------------------------- |
| `<DenmarkRegionMap />`       | Interactive map of Denmark's 5 regioner.              |
| `<DenmarkMunicipalityMap />` | Interactive map of Denmark's 98 kommuner.             |
| `denmarkRegions`             | `string[]` of the 5 region names, in path-id order.   |
| `denmarkMunicipalities`      | `string[]` of the 98 kommune names, in path-id order. |

Both levels are the ones the 2007 reform created, and both are named in Danish
without their administrative word: `"Hovedstaden"` rather than "Region
Hovedstaden", `"København"` and `"Aarhus"` rather than "Københavns Kommune" or
the English "Copenhagen". Bornholm is a kommune of its own and belongs to
`"Hovedstaden"`.

### `react-svg-maps/pl`

| Export                     | Description                                                |
| :------------------------- | :--------------------------------------------------------- |
| `<PolandVoivodeshipMap />` | Interactive map of Poland's 16 województwa (voivodeships). |
| `<PolandCountyMap />`      | Interactive map of Poland's 380 powiaty (counties).        |
| `polandVoivodeships`       | `string[]` of the 16 voivodeship names, in path-id order.  |
| `polandCounties`           | `string[]` of the 380 powiat names, in path-id order.      |

Names are Polish: voivodeships as the adjective alone, `"Mazowieckie"` rather
than "województwo mazowieckie" or the English "Masovian". Land powiaty keep the
word, `"powiat tatrzański"`; the 66 cities with powiat rights are just the city,
`"Warszawa"`, `"Kraków"`, `"Gdańsk"`.

Ten powiat names occur twice in Poland, so those twenty carry their voivodeship
to tell them apart — `"powiat brzeski (małopolskie)"` and
`"powiat brzeski (opolskie)"`. The other 360 names are bare.

### `react-svg-maps/sct`

| Export                       | Description                                                |
| :--------------------------- | :--------------------------------------------------------- |
| `<ScotlandCouncilAreaMap />` | Interactive map of Scotland's 32 council areas.            |
| `scotlandCouncilAreas`       | `string[]` of the 32 council area names, in path-id order. |

Scotland is a constituent country of the UK and has no ISO 3166-1 code of its
own, so the subpath is its ISO 3166-2 subdivision code, `GB-SCT`, shortened the
way the others are.

Names are the official council area ones: `"City of Edinburgh"`,
`"Glasgow City"`, `"Aberdeen City"` and `"Dundee City"` rather than the bare city
names, and `"Na h-Eileanan Siar"` for the council area also known as the Western
Isles or Outer Hebrides.

### `react-svg-maps/fi`

| Export                       | Description                                                 |
| :--------------------------- | :---------------------------------------------------------- |
| `<FinlandRegionMap />`       | Interactive map of Finland's 19 maakunnat (regions).        |
| `<FinlandMunicipalityMap />` | Interactive map of Finland's 308 kunnat (municipalities).   |
| `finlandRegions`             | `string[]` of the 19 region names, in path-id order.        |
| `finlandMunicipalities`      | `string[]` of the 308 municipality names, in path-id order. |

### `react-svg-maps/jp`

| Export                   | Description                                              |
| :----------------------- | :------------------------------------------------------- |
| `<JapanRegionMap />`     | Interactive map of Japan's 8 regions.                    |
| `<JapanPrefectureMap />` | Interactive map of Japan's 47 prefectures.               |
| `japanRegions`           | `string[]` of the 8 region names, in path-id order.      |
| `japanPrefectures`       | `string[]` of the 47 prefecture names, in path-id order. |

Prefectures are romanised without the suffix — `"Tokyo"`, `"Osaka"`, `"Hokkaido"`
— and the regions are the conventional eight: `"Hokkaido"`, `"Tohoku"`,
`"Kanto"`, `"Chubu"`, `"Kansai"`, `"Chugoku"`, `"Shikoku"`, `"Kyushu"`. Regions
are not an administrative level in Japan and no boundary source publishes them,
so they are the prefectures merged: Mie sits in Kansai and Okinawa in Kyushu,
which is the usual grouping but not the only one in use.

The map covers all of Japan's territory, which includes Tokyo's Pacific islands —
Ogasawara, and Minamitorishima 1,800 km further out. They set the east and south
edges of the canvas, so the archipelago sits in its upper-left portion with open
sea below and to the right.

### `react-svg-maps/ru`

| Export                 | Description                                           |
| :--------------------- | :---------------------------------------------------- |
| `<RussiaSubjectMap />` | Interactive map of Russia's 89 federal subjects.      |
| `russiaSubjects`       | `string[]` of the 89 subject names, in path-id order. |

This map follows the same rule the India map does: it draws the boundaries as the
mapped country's own government defines them. For Russia that means 89 subjects,
including Crimea, Sevastopol and the four Ukrainian oblasts annexed in 2022,
which are shown under the names Russia gives them. Those six are not recognised
as Russian by Ukraine or by most of the world, and a Ukraine map added here later
will draw the same ground as Ukrainian.

Names are the source's English forms — `"Bashkortostan"`, `"Sakha Republic"`,
`"Khanty-Mansiysk Autonomous Okrug – Ugra"` — not transliterations of the Russian.
Chukotka is drawn past 180° rather than wrapping to the other edge of the map.

### `react-svg-maps/br`

| Export                      | Description                                                   |
| :-------------------------- | :------------------------------------------------------------ |
| `<BrazilStateMap />`        | Interactive map of Brazil's 27 federative units.              |
| `<BrazilMunicipalityMap />` | Interactive map of Brazil's 5,570 municipalities.             |
| `brazilStates`              | `string[]` of the 27 federative unit names, in path-id order. |
| `brazilMunicipalities`      | `string[]` of the 5,570 municipality names, in path-id order. |

The 27 are the 26 states plus the `"Distrito Federal"`. Municipality names are
bare where they are unique and carry the state's two-letter code where they are
not: there are five `"Bom Jesus"` and five `"São Domingos"`, so all of those read
`"Bom Jesus (PI)"` and so on. 505 of the 5,570 are suffixed this way.

IBGE lists 5,571 municipalities; the 5,571st, Boa Esperança do Norte in Mato
Grosso, is too new to have a published boundary and so is not on the map.

### `react-svg-maps/us`

| Export            | Description                                                   |
| :---------------- | :------------------------------------------------------------ |
| `<USStateMap />`  | Interactive map of the 50 states and DC.                      |
| `<USCountyMap />` | Interactive map of the 3,142 counties and county equivalents. |
| `usStates`        | `string[]` of the 51 state names, in path-id order.           |
| `usCounties`      | `string[]` of the 3,142 county names, in path-id order.       |

County names carry their state, because 1,922 distinct names are shared out
across 3,142 counties — `"Washington"` alone is used 31 times. So the keys read
`"Harris, Texas"`, `"Los Angeles, California"`, `"District of Columbia"`. The six
independent cities that share a name with the county around them take a `city`:
`"Baltimore city, Maryland"` against `"Baltimore, Maryland"`, and likewise for
Fairfax, Franklin, Richmond and Roanoke in Virginia and St. Louis in Missouri.

Alaska and Hawaii are drawn as insets below the southwest, scaled and moved the
way printed US maps place them, and identically on both levels so the two still
line up. Alaska is at 35% of its true size. The uninhabited Northwestern Hawaiian
Islands are left off so the Hawaii inset is the main chain rather than 2,400 km
of empty ocean. Territories — Puerto Rico, Guam, the US Virgin Islands, American
Samoa and the Northern Marianas — are not included at either level.

### `react-svg-maps/af`

| Export                        | Description                                              |
| :---------------------------- | :-------------------------------------------------------- |
| `<AfghanistanProvinceMap />`  | Interactive map of Afghanistan's 34 provinces.           |
| `<AfghanistanDistrictMap />`  | Interactive map of Afghanistan's 401 districts.          |
| `afghanistanProvinces`        | `string[]` of the 34 province names, in path-id order.   |
| `afghanistanDistricts`        | `string[]` of the 401 district names, in path-id order.  |

Names follow the official romanisation rather than the commonest English
spelling: `"Hirat"` and `"Hilmand"` rather than Herat and Helmand, and likewise
`"Nimroz"`, `"Paktya"`, `"Maidan Wardak"` and `"Sar-e-Pul"`.

Eleven district names are each used by two districts in different provinces, so
those 22 carry the province in brackets — `"Fayzabad (Badakhshan)"` against
`"Fayzabad (Jawzjan)"`, `"Surobi (Kabul)"` against `"Surobi (Paktika)"`. The
other 379 are bare.

The districts are the 401 the humanitarian community uses. The de-facto
authorities designate 457, but no boundaries are published for the additional
units, so they are not drawn here and their territory stays inside the districts
it was split from.

### `react-svg-maps/al`

| Export                        | Description                                                  |
| :---------------------------- | :------------------------------------------------------------ |
| `<AlbaniaCountyMap />`        | Interactive map of Albania's 12 qarqe (counties).            |
| `<AlbaniaMunicipalityMap />`  | Interactive map of Albania's 61 bashki (municipalities).     |
| `albaniaCounties`             | `string[]` of the 12 county names, in path-id order.         |
| `albaniaMunicipalities`       | `string[]` of the 61 municipality names, in path-id order.   |

Names are Albanian, with their diacritics and without the `Bashkia` prefix the
source carries — `"Tiranë"`, `"Shkodër"`, `"Korçë"`, `"Malësi e Madhe"`. The
municipalities are the 61 of the 2014 territorial reform, under their current
names: `"Dimal"` rather than the source's "Ura Vajgurore", renamed in 2021, and
`"Has"` rather than "Krumë", which is that municipality's seat rather than its
name.

Both levels come from the same release, so they line up: every municipality sits
inside the county the source assigns it to.

### `react-svg-maps/dz`

| Export                   | Description                                                 |
| :----------------------- | :------------------------------------------------------------ |
| `<AlgeriaWilayaMap />`   | Interactive map of Algeria's 58 wilayas.                    |
| `<AlgeriaCommuneMap />`  | Interactive map of Algeria's 1,541 communes.                |
| `algeriaWilayas`         | `string[]` of the 58 wilaya names, in path-id order.        |
| `algeriaCommunes`        | `string[]` of the 1,541 commune names, in path-id order.    |

Wilayas carry their official French names with diacritics — `"Béjaïa"`,
`"Médéa"`, `"Aïn Témouchent"`, `"M'Sila"`. The 58 are the division in force since
December 2019: the 48 of the 1984 law plus the ten southern wilayas promoted from
wilaya déléguée in February 2021, `"Timimoun"`, `"Bordj Badji Mokhtar"`,
`"Ouled Djellal"`, `"Béni Abbès"`, `"In Salah"`, `"In Guezzam"`, `"Touggourt"`,
`"Djanet"`, `"El M'Ghair"` and `"El Meniaa"`.

Commune names are the source's own romanisation, which is plainer than the wilaya
names — `"Ain Beida"` rather than Aïn Beïda. 85 of the 1,541 share a name with
another commune, and those carry their wilaya in brackets:
`"Ain Beida (Ouargla)"` against `"Ain Beida (Oum El Bouaghi)"`.

The wilaya boundaries are the communes merged, so the two levels agree exactly:
every commune sits inside its wilaya with no sliver between them.

### `react-svg-maps/ad`

| Export                  | Description                                              |
| :---------------------- | :-------------------------------------------------------- |
| `<AndorraParishMap />`  | Interactive map of Andorra's 7 parròquies (parishes).    |
| `andorraParishes`       | `string[]` of the 7 parish names, in path-id order.      |

Catalan names with their accents: `"Sant Julià de Lòria"`, `"Escaldes-Engordany"`,
`"Andorra la Vella"`.

### `react-svg-maps/az`

| Export                        | Description                                             |
| :---------------------------- | :-------------------------------------------------------- |
| `<AzerbaijanDistrictMap />`   | Interactive map of Azerbaijan's 74 rayons and cities.   |
| `azerbaijanDistricts`         | `string[]` of the 74 names, in path-id order.           |

One level only: the COD-AB for Azerbaijan publishes ADM1 and nothing below it.
The 74 mix rayons with the cities that sit outside them — `"Baku"`, `"Ganja"`,
`"Sumgait"` are city units, not districts of a surrounding rayon.

### `react-svg-maps/bd`

| Export                        | Description                                                |
| :---------------------------- | :----------------------------------------------------------- |
| `<BangladeshDivisionMap />`   | Interactive map of Bangladesh's 8 divisions.               |
| `<BangladeshDistrictMap />`   | Interactive map of Bangladesh's 64 districts (zila).       |
| `bangladeshDivisions`         | `string[]` of the 8 division names, in path-id order.      |
| `bangladeshDistricts`         | `string[]` of the 64 district names, in path-id order.     |

Current spellings, as the Bangladesh Bureau of Statistics gives them:
`"Chattogram"` and `"Barishal"` rather than Chittagong and Barisal, `"Bogura"`
rather than Bogra. The source also carries 507 upazilas at ADM3, which are not
included here.

### `react-svg-maps/by`

| Export                      | Description                                              |
| :-------------------------- | :--------------------------------------------------------- |
| `<BelarusRegionMap />`      | Interactive map of Belarus's 7 top-level units.          |
| `<BelarusDistrictMap />`    | Interactive map of Belarus's 119 raions.                 |
| `belarusRegions`            | `string[]` of the 7 names, in path-id order.             |
| `belarusDistricts`          | `string[]` of the 119 raion names, in path-id order.     |

The 7 are the six voblasts plus `"Minsk City"`, which is administratively
separate from the `"Minsk"` voblast around it. Names are the source's Russian-
based transliterations — `"Mogilev"`, `"Gomel"`, `"Grodno"` — not the Belarusian
forms Mahilyow, Homyel and Hrodna.

### `react-svg-maps/bt`

| Export                        | Description                                                 |
| :---------------------------- | :------------------------------------------------------------ |
| `<BhutanDzongkhagMap />`      | Interactive map of Bhutan's 20 dzongkhags (districts).      |
| `<BhutanGewogMap />`          | Interactive map of Bhutan's 205 gewogs (village blocks).     |
| `bhutanDzongkhags`            | `string[]` of the 20 dzongkhag names, in path-id order.     |
| `bhutanGewogs`                | `string[]` of the 205 gewog names, in path-id order.        |

No name is used twice at either level, so every key is bare.

### `react-svg-maps/eg`

| Export                        | Description                                                  |
| :---------------------------- | :-------------------------------------------------------------- |
| `<EgyptGovernorateMap />`     | Interactive map of Egypt's 27 governorates.                  |
| `<EgyptDistrictMap />`        | Interactive map of Egypt's 365 marakiz and aqsam.            |
| `egyptGovernorates`           | `string[]` of the 27 governorate names, in path-id order.    |
| `egyptDistricts`              | `string[]` of the 365 district names, in path-id order.      |

The second level mixes the two kinds of district Egypt has: the rural markaz and
the urban qism. 22 names are used in more than one governorate and take it in
brackets — `"Faqus (Sharkia)"`. Where a markaz and a qism share a name inside the
same governorate, which happens 18 times, each is also prefixed with its kind:
`"Qism Aswan (Aswan)"` against `"Markaz Aswan (Aswan)"`.

Egypt is simplified finer than the other maps here — half the usual tolerance —
because at the normal setting the 2.3 km² Alexandria port district collapses into
a sliver. That costs about 130 kB.

The exported name arrays let you build a `colorMap`, legend or dropdown without retyping every region:

```jsx
import { NepalDistrictMap, nepalDistricts } from "react-svg-maps/np";

const colorMap = Object.fromEntries(
  nepalDistricts.map((name) => [
    name,
    name.startsWith("K") ? "#3b82f6" : "#e2e8f0",
  ]),
);

<NepalDistrictMap colorMap={colorMap} />;
```

## Props

All map components accept the following props:

| Prop               | Type       | Default     | Description                                                                                                             |
| :----------------- | :--------- | :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| `color`            | `string`   | `"#ffffff"` | The default fill color for all regions.                                                                                 |
| `hoverColor`       | `string`   | `undefined` | The fill color applied when a region is hovered.                                                                        |
| `activeColor`      | `string`   | `undefined` | The fill color applied when a region is clicked/selected.                                                               |
| `colorMap`         | `object`   | `{}`        | An object mapping specific region names to colors (e.g., `{ "Kathmandu": "red", "Palpa": "blue" }`). Overrides `color`. |
| `stroke`           | `string`   | `"black"`   | The color of the border drawn around every region.                                                                      |
| `strokeWidth`      | `number`   | `1`         | Thickness of the region borders. `1` looks the same on every map.                                                       |
| `onHover`          | `function` | `undefined` | Callback fired when hovering over a region. Receives `{ id, name }` or `null`.                                          |
| `onSelect`         | `function` | `undefined` | Callback fired when a region is clicked. Receives `{ id, name }` or `null`.                                             |
| `showAttributions` | `boolean`  | `true`      | Toggles the display of the copyright/license attribution overlay.                                                       |
| `className`        | `string`   | `""`        | Optional CSS class for the wrapper `div`.                                                                               |
| `style`            | `object`   | `{}`        | Optional inline styles for the `svg` element.                                                                           |

These are all the props there are. Everything else about a map needs no configuration.

## License

Code is released under the [MIT License](LICENSE).

Map boundary data is licensed separately, per country — see [LICENSE-DATA](LICENSE-DATA).

| Data                           | Licence                                                         | Source                                                                                                                                              |
| :----------------------------- | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nepal districts & provinces    | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Sagarjkhatri, via Wikimedia Commons                                                                                                                 |
| India states & UTs             | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Census of India 2011                                                                                                                                |
| Germany Bundesländer & Kreise  | [DL-DE/BY-2.0](https://www.govdata.de/dl-de/by-2-0)             | GeoBasis-DE / BKG, via [geoBoundaries](https://www.geoboundaries.org/)                                                                              |
| Austria Bundesländer & Bezirke | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Colazivi / BEV, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:AT_-_blank_-_all_layers.svg)                                        |
| Switzerland cantons            | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Poulpy / Pymouss44, via [Wikimedia Commons](<https://commons.wikimedia.org/wiki/File:Switzerland_Cantons_Map_with_Names_and_Capitals_(french).svg>) |
| France régions & départements  | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Nilstilar, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:France_r%C3%A9gionale.svg)                                               |
| Denmark regioner               | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)       | Web Vector Maps, via [geoBoundaries](https://www.geoboundaries.org/)                                                                                |
| Denmark kommuner               | Public domain                                                   | Wikimedia Commons, via [geoBoundaries](https://www.geoboundaries.org/)                                                                              |
| Poland województwa & powiaty   | [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/)      | © OpenStreetMap contributors, via [geoBoundaries](https://www.geoboundaries.org/)                                                                   |
| Scotland council areas         | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | Nilfanion / Ordnance Survey, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Scottish_council_areas_2011.svg)                       |
| Finland maakunnat & kunnat     | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)       | [Tilastokeskus (Statistics Finland)](https://www.stat.fi/)                                                                                          |
| Japan regions & prefectures    | [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/)      | © OpenStreetMap contributors, via [geoBoundaries](https://www.geoboundaries.org/)                                                                   |
| Russia federal subjects        | [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/)      | © OpenStreetMap contributors, via [geoBoundaries](https://www.geoboundaries.org/)                                                                   |
| Brazil states & municipalities | IBGE open data                                                  | [Instituto Brasileiro de Geografia e Estatística](https://servicodados.ibge.gov.br/api/docs/malhas)                                                 |
| US states & counties           | Public domain                                                   | US Census Bureau, via [geoBoundaries](https://www.geoboundaries.org/)                                                                               |
| Afghanistan provinces & districts | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | AGCHO / NSIA, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-afg)                                                      |
| Albania qarqe & bashki         | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | GADM / UNHCR, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-alb)                                                                      |
| Algeria wilayas & communes     | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | UNHCR / GAUL, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-dza)                                                                      |
| Andorra parishes               | [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/)      | © OpenStreetMap contributors                                                                                                                        |
| Azerbaijan rayons              | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | GADM / OpenStreetMap, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-aze)                                               |
| Bangladesh divisions & districts | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | Bangladesh Bureau of Statistics, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-bgd)                                    |
| Belarus voblasts & raions      | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | UNICEF, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-blr)                                                             |
| Bhutan dzongkhags & gewogs     | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | OCHA ROAP, via [HDX](https://data.humdata.org/dataset/cod-ab-btn)                                                                  |
| Egypt governorates & districts | [CC BY-IGO 3.0](https://creativecommons.org/licenses/by/3.0/igo/) | CAPMAS, via [OCHA on HDX](https://data.humdata.org/dataset/cod-ab-egy)                                                             |

Map components render an attribution overlay by default, which satisfies the attribution requirement at runtime. Passing `showAttributions={false}` is allowed, but then crediting the source elsewhere becomes your responsibility.
