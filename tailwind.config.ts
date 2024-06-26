import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.04)",
        },
        "primary-blue": {
          DEFAULT: "#F5F8FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/hero-bg.png')",
        "pattern-bg": "url('/pattern.png')",
      },
      screens: {
        xs: "468px",
      },
    },
  },
  plugins: [],
};
export default config;
