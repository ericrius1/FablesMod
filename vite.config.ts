import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["box3d-wasm"]
  },
  server: {
    port: Number(process.env.PORT) || 5183
  }
});
