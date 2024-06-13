import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pa-grey-light": "#F5F5F7",
        "pa-blue": "#0077ed",
        "pa-orange": "#f56300",
        "pa-text-light": "#6e6e73",
      },
    },
  },
  plugins: [],
};
export default config;
