# react-svg-maps

A React component library for interactive SVG maps. Currently features Nepal's district and province maps, India's state map, the state and district maps of Germany and Austria, and Switzerland's cantons.

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

| Export                    | Description                                              |
| :------------------------ | :------------------------------------------------------- |
| `<GermanyStateMap />`     | Interactive map of Germany's 16 Bundesländer.            |
| `<GermanyDistrictMap />`  | Interactive map of Germany's 401 Kreise.                 |
| `germanyStates`           | `string[]` of the 16 Bundesland names, in path-id order. |
| `germanyDistricts`        | `string[]` of the 401 Kreis names, in path-id order.     |

### `react-svg-maps/at`

| Export                    | Description                                              |
| :------------------------ | :------------------------------------------------------- |
| `<AustriaStateMap />`     | Interactive map of Austria's 9 Bundesländer.             |
| `<AustriaDistrictMap />`  | Interactive map of Austria's 94 Bezirke.                 |
| `austriaStates`           | `string[]` of the 9 Bundesland names, in path-id order.  |
| `austriaDistricts`        | `string[]` of the 94 Bezirk names, in path-id order.     |

Three Bezirke share a name with the Statutarstadt they surround, so they carry a
suffix: `"Krems (Land)"`, `"St. Pölten (Land)"` and `"Wiener Neustadt (Land)"`.
The cities themselves are `"Krems an der Donau"`, `"St. Pölten"` and
`"Wiener Neustadt"`.

### `react-svg-maps/ch`

| Export                     | Description                                            |
| :------------------------- | :------------------------------------------------------ |
| `<SwitzerlandCantonMap />` | Interactive map of Switzerland's 26 cantons.           |
| `switzerlandCantons`       | `string[]` of the 26 canton names, in path-id order.   |

Cantons are named in their own official language — `"Ticino"`, `"Genève"`,
`"Graubünden"`, not the English or German exonyms. Switzerland stops at canton
level: its districts vary too much between cantons to make one map meaningful.

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

| Data | Licence | Source |
| :--- | :--- | :--- |
| Nepal districts & provinces | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Sagarjkhatri, via Wikimedia Commons |
| India states & UTs | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Census of India 2011 |
| Germany Bundesländer & Kreise | [DL-DE/BY-2.0](https://www.govdata.de/dl-de/by-2-0) | GeoBasis-DE / BKG, via [geoBoundaries](https://www.geoboundaries.org/) |
| Austria Bundesländer & Bezirke | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Colazivi / BEV, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:AT_-_blank_-_all_layers.svg) |
| Switzerland cantons | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Poulpy / Pymouss44, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Switzerland_Cantons_Map_with_Names_and_Capitals_(french).svg) |

Map components render an attribution overlay by default, which satisfies the attribution requirement at runtime. Passing `showAttributions={false}` is allowed, but then crediting the source elsewhere becomes your responsibility.
