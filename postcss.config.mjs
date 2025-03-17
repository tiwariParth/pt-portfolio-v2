const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark theme colors
        dark: {
          950: "#0A0A0F",
          900: "#121218",
          800: "#1A1A23",
          700: "#232330",
          600: "#2C2C3A",
        },
        // Neon accent colors
        neon: {
          purple: {
            500: "#BD4FFF",
            400: "#D083FF",
            300: "#E3B7FF",
            glow: "#BD4FFF80",
          },
          blue: {
            500: "#4F8FFF",
            400: "#83B3FF",
            300: "#B7D7FF",
            glow: "#4F8FFF80",
          },
          cyan: {
            500: "#4FF8FF",
            400: "#83FAFF",
            300: "#B7FCFF",
            glow: "#4FF8FF80",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-spotlight":
          "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neon-sm": "0 0 5px var(--tw-shadow-color)",
        "neon-md": "0 0 10px var(--tw-shadow-color)",
        "neon-lg": "0 0 15px var(--tw-shadow-color)",
        "neon-xl": "0 0 20px var(--tw-shadow-color)",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
