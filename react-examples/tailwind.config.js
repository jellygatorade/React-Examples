/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/examples/**/*.{js,jsx}", "./src/examples/**/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      CaseLight: ["Case-Light"],
      CaseMedium: ["Case-Medium"],
      CaseTextLight: ["CaseText-Light"],
      CaseTextRegular: ["CaseText-Regular"],
      CaseTextMedium: ["CaseText-Medium"],
      CaseMicroRegular: ["CaseMicro-Regular"],
    },
    colors: {
      /* Including 2022 NCMA palette and selections from Tailwind default color palette */
      white: "#ffffff",
      black: "#000000",
      transparent: "rgba(0, 0, 0, 0)",
      neutral: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      orange: {
        ncma: "#e0592a",
      },
      yellow: {
        ncma: "#ffce02",
      },
      "light-green": {
        ncma: "#aaac24",
      },
      "dark-green": {
        ncma: "#1a5632",
      },
      blue: {
        ncma: "#008fbe",
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      "dark-blue": {
        ncma: "#004a97",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        ncma: "#60269e",
      },
      violet: {
        ncma: "#9e28b5",
      },
      rust: {
        ncma: "#8c3b19",
      },
      "red-orange": {
        ncma: "#d64123",
      },
    },
    extend: {
      boxShadow: {
        "black-3px": "0px 0px 3px #000000",
        "black-4px": "0px 0px 4px #000000",
        "black-5px": "0px 0px 5px #000000",
        "black-10px": "0px 0px 10px #000000",
      },
    },
  },
  plugins: [],
};
