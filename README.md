# react-svg-maps

A React component library for interactive SVG maps. Currently features Nepal's district and province maps, and India's state map.

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

Map components render an attribution overlay by default, which satisfies the attribution requirement at runtime. Passing `showAttributions={false}` is allowed, but then crediting the source elsewhere becomes your responsibility.
