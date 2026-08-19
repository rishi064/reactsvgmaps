# react-svg-maps Demo

This is a demonstration application for the `react-svg-maps` package, built with Vite and React. It provides an interactive playground to test and customize the SVG maps available in the library.

**Live Demo:** [https://reactsvgmaps.com](https://reactsvgmaps.com)

## Features

* **Live Preview:** Instantly see the effects of your changes on the map.
* **Map Selection:** Toggle between different available maps (e.g., Nepal Province Map, Nepal District Map).
* **Color Customization:** Use color pickers to dynamically change the default, hover, and active colors of the map regions.
* **Interactive Elements:** Hover over or click on regions to see their names displayed in the UI.
* **Attribution Toggle:** Easily show or hide the required map attributions.

## Running Locally (Using npm package)

1. Navigate to the `demo` directory:
   ```bash
   cd demo
   ```

2. Install the dependencies (this will install `react-svg-maps` from npm):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Local Development (Building from source)

If you are contributing to the package and want to test your local changes in the demo:

1. Build the library from the root directory:
   ```bash
   cd ..
   npm install
   npm run build
   ```

2. The demo is already configured to use the local build workspace via package linking. Just start the demo:
   ```bash
   cd demo
   npm run dev
   ```

## Deployment

To build the demo for production deployment:

```bash
npm run build
```

The compiled static assets will be located in the `demo/dist` directory, which can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
