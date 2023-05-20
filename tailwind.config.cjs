/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#376789',
        foregroundFaint: '#6C6C6C',
        foregroundStrong: '#1E1E1E',
        linkPrimary: '#6941C6',
        textLightPrimary: '#475467',
        bgLight: '#F2F4F7',
      },
    },
  },
  plugins: [],
};
