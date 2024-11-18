/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // Animazione per alternare opacità (accensione e spegnimento netti)
        pulseOpacity: "pulseOpacity 1s steps(1, end) infinite",
      },
      keyframes: {
        // Alternanza netta tra opacity 0 e 1
        pulseOpacity: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cyberpunk",
      "dark",
      {
        cyberpunk: {
          ...require("daisyui/src/theming/themes")["cyberpunk"],
          "color-scheme": "light",
          fontFamily:
            "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
          primary: "#e7e5e4",
          secondary: "oklch(83.33% 0.184 204.72)",
          accent: "oklch(71.86% 0.2176 310.43)",
          neutral: "oklch(23.04% 0.065 269.31)",
          "neutral-content": "oklch(94.51% 0.179 104.32)",
          "base-100": "blue",
          color: "black",
          "background-color": "#e7e5e4",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
        },
      },
    ],
  },
};
