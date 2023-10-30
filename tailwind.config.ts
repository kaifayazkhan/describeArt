import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primaryText: "#18181A",
      primaryCTA: "#6e4fe9",
      linearGradient: { "90": "linear-gradient(90deg, #ff4895, #6e4fe9)" },
    },
  },
  plugins: [],
};
export default config;
