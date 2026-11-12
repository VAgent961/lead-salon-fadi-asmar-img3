import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#1F2937",
  "secondary": "#D4AF37",
  "accent": "#D4AF37",
  "background": "#FFFFFF",
  "surface": "#F3F4F6",
  "ink": "#111827",
  "muted": "#4B5563",
  "dark": "#1F2937"
},
      fontFamily: {
  "heading": [
    "Playfair Display",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
