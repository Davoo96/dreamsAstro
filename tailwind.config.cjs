/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/!(*.test).{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        md: ["2rem", "1"],
        lg: ["3.5rem", "1.25"],
        big: ["10rem", "1"],
        huge: ["16rem", "1"]
      },
      boxShadow: {
        "copy-x": "0 10px #fff, 0 -10px #fff"
      },
      backgroundImage: {
        "header-image":
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/mobile-00.png')",
        "header-desktop-image":
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/JanduiCasas5.png')",
        "header-gradient": "linear-gradient(#1f2224, transparent)",
        "novo-residence":
          "linear-gradient(#1f2224, 80%, transparent), url('/src/assets/pictures/mobile-01.png')",
        "novo-residence-desktop":
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/pht-03.png')",
        jabuticabeira:
          "linear-gradient(#1f2224, 80%, transparent), url('/src/assets/pictures/mobile-02.png')",
        "jabuticabeira-desktop":
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/pht-04.png')",
        view: "linear-gradient(#1f2224, 80%, transparent), url('/src/assets/pictures/mobile-03.png')",
        "view-desktop":
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/pht-36.png')"
      },
      backgroundSize: {
        100: "100% 100%"
      },
      colors: {
        orange: {
          300: "#FC4C02",
          50: "rgba(252, 76, 2, .7)"
        },
        black: {
          300: "#1f2224",
          50: "linear-gradient(#000, transparent)"
        },
        gray: {
          300: "#e0e0e0"
        }
      },
      dropShadow: {
        huge: [
          "-1px -1px 0 #cccccc",
          "1px -1px 0 #cccccc",
          "-1px 1px 0 #cccccc",
          "1px 1px 0 #cccccc"
        ],
        hugeDark: [
          "-1px -1px 0 #dadada",
          "1px -1px 0 #dadada",
          "-1px 1px 0 #dadada",
          "1px 1px 0 #dadada"
        ]
      },
      maxWidth: {
        "7/10": "70%",
        "8/10": "80%"
      },
      screens: {
        "tablet":  "640px",
        "laptop": "1024px",
        "desktop": "1280px"
      }
    }
  },
  plugins: []
};
