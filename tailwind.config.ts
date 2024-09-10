import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'content-w': '64rem',
      },
      colors: {
        white: '#ffffff',
        background: '#eeeeee',
        foreground: '#F8F9FA',
        gray: {
          400: '#8A94A4',
          600: '#464646',
          700: '#2C2C2C',
          900: '#121212',
        },
      },
    },
  },
  plugins: [],
};
export default config;
