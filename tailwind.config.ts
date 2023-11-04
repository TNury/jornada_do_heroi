import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['0.875rem', '150%'], // 14px
        base: ['1rem', '150%'], // 16px
        lg: ['1.125rem', '150%'], // 18px
      },
      boxShadow: {
        comic: '4px 4px 0 #000',
      },
      transitionDuration: {
        200: '200ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      backgroundImage: ({ theme }) => ({
        'gradient-yellow': `radial-gradient(circle, ${theme(
          'colors.yellow.400'
        )}, ${theme('colors.orange.400')})`,
        // 'gradient-blue': 'radial-gradient(circle, lightblue, deepskyblue)',
        'gradient-blue': `radial-gradient(circle, lightblue, deepskyblue)`,
      }),
    },
  },
  plugins: [],
};
export default config;
