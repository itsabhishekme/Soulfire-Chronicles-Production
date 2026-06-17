import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        soulfire: {
          50: "#fff9eb",
          100: "#fff1c7",
          200: "#ffe18a",
          300: "#ffcd4a",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },

        background: "#000000",
        foreground: "#ffffff",

        muted: "#9ca3af",
        border: "rgba(255,255,255,0.1)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],

        display: [
          "Poppins",
          "Inter",
          "sans-serif",
        ],
      },

      maxWidth: {
        "8xl": "90rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        glow: "0 0 40px rgba(245,158,11,0.25)",

        amber:
          "0 10px 40px rgba(245,158,11,0.15)",

        cinematic:
          "0 25px 80px rgba(0,0,0,0.5)",
      },

      backgroundImage: {
        hero:
          "radial-gradient(circle at top, rgba(245,158,11,0.15), transparent 60%)",

        cinematic:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.85))",

        amberGlow:
          "radial-gradient(circle, rgba(245,158,11,0.2), transparent 70%)",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        glow: {
          "0%, 100%": {
            opacity: "0.6",
          },

          "50%": {
            opacity: "1",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform:
              "translate3d(0,40px,0)",
          },

          to: {
            opacity: "1",
            transform:
              "translate3d(0,0,0)",
          },
        },

        pulseSlow: {
          "0%, 100%": {
            transform: "scale(1)",
          },

          "50%": {
            transform: "scale(1.05)",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        glow: "glow 4s ease-in-out infinite",

        fadeUp:
          "fadeUp 0.8s ease-out forwards",

        pulseSlow:
          "pulseSlow 5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;