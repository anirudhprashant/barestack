import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F7F5F2',
        loam: '#413C3A',
        terracotta: '#E07A5F',
        sage: '#84A98C',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config