import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        comic: '4px 4px 0 #000',
      },
      backgroundImage: ({ theme }) => ({
        'gradient-yellow': `radial-gradient(circle, ${theme(
          'colors.yellow.400'
        )}, ${theme('colors.orange.400')})`,

        'gradient-blue': `radial-gradient(circle, lightblue, deepskyblue)`,
      }),
    },
  },
  plugins: [],
};
export default config;
