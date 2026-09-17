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
        af: resolve(import.meta.dirname, "src/countries/af/index.js"),
        al: resolve(import.meta.dirname, "src/countries/al/index.js"),
        dz: resolve(import.meta.dirname, "src/countries/dz/index.js"),
        ad: resolve(import.meta.dirname, "src/countries/ad/index.js"),
        bt: resolve(import.meta.dirname, "src/countries/bt/index.js"),
        az: resolve(import.meta.dirname, "src/countries/az/index.js"),
        by: resolve(import.meta.dirname, "src/countries/by/index.js"),
        eg: resolve(import.meta.dirname, "src/countries/eg/index.js"),
        bd: resolve(import.meta.dirname, "src/countries/bd/index.js"),
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
