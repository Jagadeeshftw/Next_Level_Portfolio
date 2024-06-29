import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import { Playfair } from "next/font/google";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Playfair: ["Playfair Display", "serif"],

      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        "gradient-start": "rgba(17, 16, 16, 0.582)",
        "gradient-end": "rgba(12, 8, 24, 0.904)",
        gray: {
          DEFAULT: "#000",
          //1000: "rgba(34, 34, 34, 0.5)",
          1000: "rgba(192, 192, 192, 0.3)",
          1100: "rgba(192, 192, 192, 1)",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
