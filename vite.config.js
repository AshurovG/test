import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "tmm/",
  plugins: [
    react(),
    {
      name: "copy-assets",
      writeBundle() {
        this.emitFile({
          type: "asset",
          fileName: "assets/[name].[ext]",
          source: "assets/[name].[ext]",
        });
      },
    },
  ],
});
