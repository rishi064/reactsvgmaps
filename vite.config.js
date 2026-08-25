import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        np: resolve(import.meta.dirname, "src/countries/np/index.js"),
        in: resolve(import.meta.dirname, "src/countries/in/index.js"),
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
