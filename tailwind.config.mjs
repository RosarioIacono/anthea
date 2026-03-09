// tailwind.config.mjs
// This is where Anthea's visual identity lives in code.
// We extend Tailwind's defaults with a custom warm/earthy palette
// and register the brand fonts so you can use classes like
// font-heading, text-soil, bg-linen, etc.

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ─── COLOR PALETTE ───────────────────────────────────────────
      // Named after natural references to reinforce the brand feel
      colors: {
        soil:       '#2C1A0E', // deep brown — primary text, headings
        bark:       '#3D2B1A', // slightly lighter brown — nav bg, dark sections
        ochre:      '#C4893A', // warm amber — primary accent, links, CTAs
        ochre_dark: '#A06C24', // hover state for ochre
        sage:       '#6B7A52', // muted green — secondary accent, tags
        sage_light: '#8A9B6E', // lighter sage for hover states
        linen:      '#F5F0E8', // warm off-white — main background
        linen_dark: '#EDE8DC', // slightly darker linen — card backgrounds
        terracotta: '#C4622D', // warm red-orange — use sparingly for emphasis
        stone:      '#9C8E80', // muted warm grey — secondary text, captions
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────
      // Sora: your existing brand font, geometric, clean — for headings
      // Lora: warm humanist serif — for body text. Gives a scientific
      //       journal feel without being cold. Works beautifully for
      //       long-form content like Science and Blog pages.
      fontFamily: {
        heading: ['"Sora"', 'sans-serif'],
        body:    ['"Lora"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'], // for any code/data display
      },

      // ─── SPACING & SIZING ────────────────────────────────────────
      maxWidth: {
        content: '72rem',  // 1152px — comfortable reading width
        prose:   '68ch',   // optimal reading line length
      },

      // ─── TYPOGRAPHY PLUGIN OVERRIDES ─────────────────────────────
      // These override @tailwindcss/typography defaults to match our palette
      typography: (theme) => ({
        anthea: {
          css: {
            '--tw-prose-body':        theme('colors.soil'),
            '--tw-prose-headings':    theme('colors.soil'),
            '--tw-prose-links':       theme('colors.ochre'),
            '--tw-prose-bold':        theme('colors.soil'),
            '--tw-prose-counters':    theme('colors.stone'),
            '--tw-prose-bullets':     theme('colors.ochre'),
            '--tw-prose-hr':          theme('colors.linen_dark'),
            '--tw-prose-quotes':      theme('colors.bark'),
            '--tw-prose-quote-borders': theme('colors.ochre'),
            '--tw-prose-captions':    theme('colors.stone'),
            '--tw-prose-code':        theme('colors.terracotta'),
            '--tw-prose-pre-bg':      theme('colors.bark'),
            fontFamily:               theme('fontFamily.body').join(', '),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
