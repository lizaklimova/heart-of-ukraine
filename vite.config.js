import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      schemas: "/src/schemas",
      pages: "/src/pages",
      routes: "/src/routes",
      api: "/src/api",
      constants: "/src/constants",
      helpers: "/src/helpers",
      layouts: "/src/layouts",
      data: "src/data",
    },
  },
});
