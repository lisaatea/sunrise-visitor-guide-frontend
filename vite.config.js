import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sunrise-visitor-guide-frontend"
  server: {
    port: 3000,
  },
});
