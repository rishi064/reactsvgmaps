# react-svg-maps

A React component library for interactive SVG maps. Currently features Nepal's district and province maps.

**Live Demo:** [https://reactsvgmaps.com](https://reactsvgmaps.com)

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

### `<NepalDistrictMap />`
Renders an interactive map of Nepal's 77 districts.

### `<NepalProvinceMap />`
Renders an interactive map of Nepal's 7 provinces.

## Props

All map components accept the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `"#ffffff"` | The default fill color for all regions. |
| `hoverColor` | `string` | `undefined` | The fill color applied when a region is hovered. |
| `activeColor` | `string` | `undefined` | The fill color applied when a region is clicked/selected. |
| `colorMap` | `object` | `{}` | An object mapping specific region names to colors (e.g., `{ "Kathmandu": "red", "Palpa": "blue" }`). Overrides `color`. |
| `onHover` | `function` | `undefined` | Callback fired when hovering over a region. Receives `{ id, name }` or `null`. |
| `onSelect` | `function` | `undefined` | Callback fired when a region is clicked. Receives `{ id, name }` or `null`. |
| `showAttributions` | `boolean` | `true` | Toggles the display of the copyright/license attribution overlay. |
| `className` | `string` | `""` | Optional CSS class for the wrapper `div`. |
| `style` | `object` | `{}` | Optional inline styles for the `svg` element. |

## License

MIT
