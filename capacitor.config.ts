import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.netzcortes.tictactoe",
  appName: "tictactoe",
  webDir: "dist",
  server: {
    cleartext: true,
    androidScheme: "https",
  },
};

export default config;
