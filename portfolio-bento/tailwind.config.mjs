/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], // Fallback to sans-serif
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkNavy: "#0D1B2A",
      deepBlue: "#1B263B",
      slateBlue: "#415A77",
      softBlue: "#778DA9",
      lightNeutral: "#E0E1DD",
      },
      animation: {
        float1: "float 6s ease-in-out infinite",
        float2: "float 6.2s ease-in-out infinite",
        float3: "float 6.4s ease-in-out infinite",
        float4: "float 6.6s ease-in-out infinite",
        float5: "float 6.8s ease-in-out infinite",
        float6: "float 7s ease-in-out infinite",
        float7: "float 7.2s ease-in-out infinite",
        float8: "float 8s ease-in-out infinite",
        progress: 'progress 5s linear forwards',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
    },
  },
  plugins: [],
};
