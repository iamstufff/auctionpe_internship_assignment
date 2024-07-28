import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  env: {
    VITE_APP_BACKEND_URL: "http://localhost:5000",
  },
  plugins: [react()],
});
