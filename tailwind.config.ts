import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050608",
        panel: "#0B0F16",
        panelSoft: "#101722",
        electric: "#39A7FF",
        terminal: "#35F29A",
        line: "rgba(255, 255, 255, 0.10)"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.34)",
        glow: "0 0 38px rgba(57, 167, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
