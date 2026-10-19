import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE lets GitHub Pages serve the app from /my-portfolio/.
// Locally it stays "/" so `npm run dev` is unaffected.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
