import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',

        md: '1024px',

        lg: '1280px',

        xl: '1536px',
      },
      boxShadow: {
        comic: '4px 4px 0 #000',
      },
      backgroundImage: {
        'gradient-blue': `radial-gradient(circle, lightblue, deepskyblue)`,
      },
    },
  },
  plugins: [],
};
export default config;
