/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {
        // Agregando la paleta de colores de Zinc para que puedas usar `bg-zinc-950`
        colors: {
          zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          techno: ['Orbitron', 'Inter', 'ui-sans-serif'],
          orbitron: ['Orbitron', 'sans-serif'],
          'space-mono': ['Space Mono', 'monospace'],
        },
        boxShadow: {
          neon: '0 0 20px rgba(59,130,246,0.45)',
          neonPink: '0 0 20px rgba(236,72,153,0.45)',
          neonGreen: '0 0 20px rgba(16,185,129,0.45)',
          'neon-logo': '0 0 10px rgba(129, 140, 248, 0.6), 0 0 20px rgba(129, 140, 248, 0.4)',
          'neon-blue-light': '0 0 8px rgba(96, 165, 250, 0.7)',
          'neon-green-light': '0 0 8px rgba(132, 204, 22, 0.7)',
          'neon-pink-light': '0 0 8px rgba(244, 114, 182, 0.7)',
        },
        keyframes: {
          float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
          pulseGlow: { '0%,100%': { boxShadow: '0 0 0 rgba(59,130,246,0.0)' }, '50%': { boxShadow: '0 0 35px rgba(59,130,246,0.45)' } },
          gradientMove: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
          'gradient-shift': { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        },
        animation: {
          float: 'float 6s ease-in-out infinite',
          pulseGlow: 'pulseGlow 3s ease-in-out infinite',
          gradient: 'gradientMove 12s ease infinite',
          'gradient-shift': 'gradient-shift 15s ease infinite',
        },
        backgroundImage: {
          'grid-dots': 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        },
      }
    },
    plugins: []
  }
  