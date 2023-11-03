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
      primaryText: "#f5deb3",
      primaryBg: "#18181A",
      primaryCTA: "#6e4fe9",
      secondaryCTA: "#ff4895",
      linearGradient: { "90": "linear-gradient(90deg, #ff4895, #6e4fe9)" },
    },
    screens: {
      mobile: "550px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
