import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 80px rgba(15, 23, 42, 0.45)',
      },
      colors: {
        ink: '#020617',
      },
    },
  },
  plugins: [],
} satisfies Config;
