/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
          primary: "oklch(74.22% 0.209 6.35)",
          secondary: "oklch(83.33% 0.184 204.72)",
          accent: "oklch(71.86% 0.2176 310.43)",
          neutral: "oklch(23.04% 0.065 269.31)",
          "neutral-content": "oklch(94.51% 0.179 104.32)",
          "base-100": "blue",
          color: "black",
          "background-color": "white",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
        },
      },
    ],
  },
};
