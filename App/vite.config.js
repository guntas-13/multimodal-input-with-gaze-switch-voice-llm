import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/multimodal-input-with-gaze-switch-voice-llm/",
  plugins: [react()],
});
