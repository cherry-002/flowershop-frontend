import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    colors: {
      'White': '#FFFFFF',
      'Extra-light': '#F5F5F7',
      'Light-gray': '#D2D2D7',
      'Gray': '#808080',
      'Dark-gray': '#424245',
      'Black': '#121212',
      'Success': '#32936F',
      'Error': '#F55F56',
    }
  },
  plugins: [],
};
export default config;
