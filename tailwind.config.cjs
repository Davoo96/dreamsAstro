/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/!(*.test).{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1000ms ease-in forwards",
        fadeLeft: "fadeLeft 1000ms ease-in forwards",
        fadeRight: "fadeRight 1000ms ease-in forwards",
        fadeDown: "fadeDown 1000ms ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(200px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-200px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-200px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        none: "0",
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
          "linear-gradient(#1f2224, transparent), url('/src/assets/pictures/pht-36.png')",
        incorporation: "url('/src/assets/pictures/pht-07.png')",
        construction: "url('/src/assets/pictures/pht-08.png')",
        management: "url('/src/assets/pictures/pht-09.png')",
        projects: "url('/src/assets/pictures/pht-10.png')",
        "bg-header-linear-gradient": "linear-gradient(, transparent)"
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
          100: "#1f2224",
          50: "linear-gradient(#000, transparent)"
        },
        gray: {
          300: "#e0e0e0",
          100: "#ccc"
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
        tablet: "768px",
        desktop: "1280px"
      },
      spacing: {
        dynamic: "100dvh"
      },
      flexBasis: {
        "fit-content": "fit-content"
      }
    }
  },
  varaints: {
    animation: ["motion-safe"]
  },
  plugins: []
};
