import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "tictactoe",
    short_name: "tictactoe-app",
    description: "tic tac toe app game.",
    icons: [
      {
        src: "/app/tictactoe/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app/tictactoe/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app/tictactoe/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/app/tictactoe/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/app/tictactoe/screenshot2.webp",
        sizes: "1367x637",
        type: "image/webp",
        form_factor: "wide",
        label: "List of Awesome Resources available in SRMAPP",
      },
      {
        src: "/app/tictactoe/screenshot2.webp",
        sizes: "1367x637",
        type: "image/webp",
        label: "List of Awesome Resources available in SRMAPP",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/app/tictactoe/",
    start_url: "/app/tictactoe/",
    orientation: "portrait",
    id: "/app/tictactoe/",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  base: "/app/tictactoe/", // quitar para mobile
});
