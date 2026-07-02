import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["box3d-wasm"]
  },
  server: {
    port: 5183
  }
});
