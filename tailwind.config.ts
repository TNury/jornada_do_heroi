import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['0.875rem', '150%'], // 14px
        base: ['1rem', '150%'], // 16px
        lg: ['1.125rem', '150%'] // 18px
      },
      transitionDuration: {
        200: '200ms'
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out'
      }
    }
  },
  plugins: []
};
export default config;
