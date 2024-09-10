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
          700: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
