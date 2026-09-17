import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// basic vite setup, nothing fancy here
export default defineConfig({
  plugins: [react()],
});
