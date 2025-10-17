import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import tailwindcss from "@tailwindcss/vite"; // ⚠️ optional (works only if you keep v4 plugin)
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  // base must match your GitHub repo name so assets are served from
  // https://<user>.github.io/<repo>/
  base: "/converter/",
  plugins: [
    react(),
    //tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 enables absolute imports
    },
  },
});
