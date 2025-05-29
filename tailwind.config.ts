import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '5xl': '64rem',
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'poppins': ['var(--font-poppins)'],
        'fira-code': ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
}
export default config 