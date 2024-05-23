import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { mediapipeWorkaround } from "./mediapipe-workaround";

export default defineConfig({
  base: "test/",
  plugins: [
    react(),
    // {
    //   name: "mediapipe-workaround",
    //   ...mediapipeWorkaround(),
    // },
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
