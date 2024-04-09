import type { Config } from "tailwindcss";
const sfpyTheme = require("@sfpy/styleguide/tailwind");

const externalPathPrefix =
  process.env.NODE_ENV === "development" ? "../.." : ".";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    `${externalPathPrefix}/node_modules/@sfpy/styleguide/dist/**/*.{js,ts,jsx,tsx}`,
  ],
  ...sfpyTheme,
};
export default config;
