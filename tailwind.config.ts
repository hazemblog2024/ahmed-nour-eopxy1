import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0033a0", // أزرق ملكي
          50: "#e6f0ff",
          100: "#b3d1ff",
          200: "#80b3ff",
          300: "#4d94ff",
          400: "#1a75ff",
          500: "#0033a0",
          600: "#002980",
          700: "#001f60",
          800: "#001540",
          900: "#000b20",
        },
        gold: {
          DEFAULT: "#d4af37", // ذهبي فاتح
          50: "#fefbf0",
          100: "#fcf4d1",
          200: "#f9e8a3",
          300: "#f5dc75",
          400: "#f2d047",
          500: "#d4af37",
          600: "#b8962e",
          700: "#9c7d25",
          800: "#80641c",
          900: "#644b13",
        },
        gray: {
          DEFAULT: "#777777",
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#777777",
          600: "#666666",
          700: "#555555",
          800: "#444444",
          900: "#333333",
        },
      },
      fontFamily: {
        'sans': ['Cairo', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'arabic': ['Cairo', 'sans-serif'],
        'serif': ['Cairo', 'sans-serif'],
        'mono': ['Cairo', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
