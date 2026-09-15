import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        np: resolve(import.meta.dirname, "src/countries/np/index.js"),
        in: resolve(import.meta.dirname, "src/countries/in/index.js"),
        de: resolve(import.meta.dirname, "src/countries/de/index.js"),
        at: resolve(import.meta.dirname, "src/countries/at/index.js"),
        ch: resolve(import.meta.dirname, "src/countries/ch/index.js"),
        fr: resolve(import.meta.dirname, "src/countries/fr/index.js"),
        dk: resolve(import.meta.dirname, "src/countries/dk/index.js"),
        pl: resolve(import.meta.dirname, "src/countries/pl/index.js"),
        sct: resolve(import.meta.dirname, "src/countries/sct/index.js"),
        fi: resolve(import.meta.dirname, "src/countries/fi/index.js"),
        jp: resolve(import.meta.dirname, "src/countries/jp/index.js"),
        ru: resolve(import.meta.dirname, "src/countries/ru/index.js"),
        br: resolve(import.meta.dirname, "src/countries/br/index.js"),
        us: resolve(import.meta.dirname, "src/countries/us/index.js"),
      },
      name: "ReactWorldMaps",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
