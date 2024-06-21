const plugin = require('tailwindcss/plugin');

const palette = {
  'palette-white': 'var(--sfpy-color-white)',
  'palette-black': 'var(--sfpy-color-black)',
  
  'palette-green7': 'var(--green-7)',
  'palette-green8': 'var(--green-8)',
  'palette-green9': 'var(--green-9)',
  'palette-green10': 'var(--green-10)',
  'palette-green11': 'var(--green-11)',
  'palette-green12': 'var(--green-12)',

  'palette-purple1': 'var(--purple-1)',
  'palette-purple2': 'var(--purple-2)',
  'palette-purple3': 'var(--purple-3)',
  'palette-purple4': 'var(--purple-4)',
  'palette-purple5': 'var(--purple-5)',
  'palette-purple6': 'var(--purple-6)',
  'palette-purple7': 'var(--purple-7)',
  'palette-purple8': 'var(--purple-8)',
  'palette-purple9': 'var(--purple-9)',
  'palette-purple10': 'var(--purple-10)',
  'palette-purple11': 'var(--purple-11)',
  'palette-purple12': 'var(--purple-12)',

  'palette-pink1': 'var(--pink-1)',
  'palette-pink2': 'var(--pink-2)',
  'palette-pink3': 'var(--pink-3)',
  'palette-pink4': 'var(--pink-4)',
  'palette-pink5': 'var(--pink-5)',
  'palette-pink6': 'var(--pink-6)',
  'palette-pink7': 'var(--pink-7)',
  'palette-pink8': 'var(--pink-8)',
  'palette-pink9': 'var(--pink-9)',
  'palette-pink10': 'var(--pink-10)',
  'palette-pink11': 'var(--pink-11)',
  'palette-pink12': 'var(--pink-12)',

  'palette-orange7': 'var(--orange-7)',
  'palette-orange8': 'var(--orange-8)',
  'palette-orange9': 'var(--orange-9)',
  'palette-orange10': 'var(--orange-10)',
  'palette-orange11': 'var(--orange-11)',
  'palette-orange12': 'var(--orange-12)',

  'palette-yellow1': 'var(--yellow-1)',
  'palette-yellow2': 'var(--yellow-2)',
  'palette-yellow3': 'var(--yellow-3)',
  'palette-yellow4': 'var(--yellow-4)',
  'palette-yellow5': 'var(--yellow-5)',
  'palette-yellow6': 'var(--yellow-6)',
  'palette-yellow7': 'var(--yellow-7)',
  'palette-yellow8': 'var(--yellow-8)',
  'palette-yellow9': 'var(--yellow-9)',
  'palette-yellow10': 'var(--yellow-10)',
  'palette-yellow11': 'var(--yellow-11)',
  'palette-yellow12': 'var(--yellow-12)',

  'palette-blue7': 'var(--blue-7)',
  'palette-blue8': 'var(--blue-8)',
  'palette-blue9': 'var(--blue-9)',
  'palette-blue10': 'var(--blue-10)',
  'palette-blue11': 'var(--blue-11)',
  'palette-blue12': 'var(--blue-12)',

  'palette-red7': 'var(--red-7)',
  'palette-red8': 'var(--red-8)',
  'palette-red9': 'var(--red-9)',
  'palette-red10': 'var(--red-10)',
  'palette-red11': 'var(--red-11)',
  'palette-red12': 'var(--red-12)',

  'palette-gray10': 'var(--slate-10)',
  'palette-gray11': 'var(--slate-11)',
  'palette-gray12': 'var(--slate-12)',

  'palette-green1':'var(--sfpy-green-1)',
  'palette-green2':'var(--sfpy-green-2)',
  'palette-green3':'var(--sfpy-green-3)',
  'palette-green4':'var(--sfpy-green-4)',
  'palette-green5':'var(--sfpy-green-5)',
  'palette-green6':'var(--sfpy-green-6)',

  'palette-blue1':'var(--sfpy-blue-1)',
  'palette-blue2':'var(--sfpy-blue-2)',
  'palette-blue3':'var(--sfpy-blue-3)',
  'palette-blue4':'var(--sfpy-blue-4)',
  'palette-blue5':'var(--sfpy-blue-5)',
  'palette-blue6':'var(--sfpy-blue-6)',

  'palette-red1':'var(--sfpy-red-1)',
  'palette-red2':'var(--sfpy-red-2)',
  'palette-red3':'var(--sfpy-red-3)',
  'palette-red4':'var(--sfpy-red-4)',
  'palette-red5':'var(--sfpy-red-5)',
  'palette-red6':'var(--sfpy-red-6)',

  'palette-grey1':'var(--sfpy-grey-1)',
  'palette-grey2':'var(--sfpy-grey-2)',
  'palette-grey3':'var(--sfpy-grey-3)',
  'palette-grey4':'var(--sfpy-grey-4)',
  'palette-grey5':'var(--sfpy-grey-5)',
  'palette-grey6':'var(--sfpy-grey-6)',
  'palette-grey7':'var(--sfpy-grey-7)',
  'palette-grey8':'var(--sfpy-grey-8)',
  'palette-grey9':'var(--sfpy-grey-9)',

  'palette-organge1':'var(--sfpy-organge-1)',
  'palette-organge2':'var(--sfpy-organge-2)',
  'palette-organge3':'var(--sfpy-organge-3)',
  'palette-organge4':'var(--sfpy-organge-4)',
  'palette-organge5':'var(--sfpy-organge-5)',
  'palette-organge6':'var(--sfpy-organge-6)',
};

const sfpyTailwindConfig = {
  safelist: ['icon-md', 'text-icon-default'],
  darkMode: ['class', '[class*="dark-theme"]'],
  theme: {
    borderRadius: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 14,
      '2xl': 18,
      '3xl': 22,
      full: 9999,
    },
    backgroundColor: {
      default: 'var(--sfpy-theme-background-default)',
      screen: 'var(--sfpy-theme-background-screen)',
      subtle: 'var(--sfpy-theme-background-subtle)',
      element: 'var(--sfpy-theme-background-element)',
      hover: 'var(--sfpy-theme-background-hover)',
      selected: 'var(--sfpy-theme-background-selected)',
      overlay: 'var(--sfpy-theme-background-overlay)',
      success: 'var(--sfpy-theme-background-success)',
      warning: 'var(--sfpy-theme-background-warning)',
      danger: 'var(--sfpy-theme-background-danger)',
      info: 'var(--sfpy-theme-background-info)',

      'primary-blue': 'var(--sfpy-color-primary-blue)',
      'primary-black': 'var(--sfpy-color-primary-black)',
      'primary-white': 'var(--sfpy-color-primary-white)',
      'primary-grey': 'var(--sfpy-color-primary-grey)',
      'primary-blue-hover': 'var(--sfpy-color-primary-blue-hover)',
      'primary-black-hover': 'var(--sfpy-color-primary-black-hover)',
      'primary-white-hover': 'var(--sfpy-color-primary-white-hover)',

      'button-primary': 'var(--sfpy-theme-button-primary-background)',
      'button-primary-hover': 'var(--sfpy-theme-button-primary-hover)',
      'button-primary-disabled': 'var(--sfpy-theme-button-primary-disabled-background)',
      'button-primary-destructive': 'var(--sfpy-theme-button-primary-destructive-background)',
      'button-primary-destructive-hover': 'var(--sfpy-theme-button-primary-destructive-hover)',
      'button-primary-destructive-disabled': 'var(--sfpy-theme-button-primary-destructive-disabled-background)',

      'button-secondary': 'var(--sfpy-theme-button-secondary-background)',
      'button-secondary-hover': 'var(--sfpy-theme-button-secondary-hover)',
      'button-secondary-disabled': 'var(--sfpy-theme-button-secondary-disabled-background)',
      'button-secondary-destructive': 'var(--sfpy-theme-button-secondary-destructive-background)',
      'button-secondary-destructive-hover': 'var(--sfpy-theme-button-secondary-destructive-hover)',
      'button-secondary-destructive-disabled': 'var(--sfpy-theme-button-secondary-destructive-disabled-background)',

      'button-tertiary': 'var(--sfpy-theme-button-tertiary-background)',
      'button-tertiary-hover': 'var(--sfpy-theme-button-tertiary-hover)',
      'button-tertiary-disabled': 'var(--sfpy-theme-button-tertiary-disabled-background)',

      'button-quaternary': 'var(--sfpy-theme-button-quaternary-background)',
      'button-quaternary-hover': 'var(--sfpy-theme-button-quaternary-hover)',
      'button-quaternary-disabled': 'var(--sfpy-theme-button-quaternary-disabled-background)',

      ...palette,
    },
    borderColor: {
      default: 'var(--sfpy-theme-border-default)',
      secondary: 'var(--sfpy-theme-border-secondary)',
      success: 'var(--sfpy-theme-border-success)',
      warning: 'var(--sfpy-theme-border-warning)',
      danger: 'var(--sfpy-theme-border-danger)',
      info: 'var(--sfpy-theme-border-info)',
      transparent: 'transparent',

      'button-primary': 'var(--sfpy-theme-button-primary-border)',
      'button-primary-disabled': 'var(--sfpy-theme-button-primary-disabled-border)',
      'button-primary-destructive': 'var(--sfpy-theme-button-primary-destructive-border)',
      'button-primary-destructive-disabled': 'var(--sfpy-theme-button-primary-destructive-disabled-border)',

      'button-secondary': 'var(--sfpy-theme-button-secondary-border)',
      'button-secondary-disabled': 'var(--sfpy-theme-button-secondary-disabled-border)',
      'button-secondary-destructive': 'var(--sfpy-theme-button-secondary-destructive-border)',
      'button-secondary-destructive-disabled': 'var(--sfpy-theme-button-secondary-destructive-disabled-border)',

      'button-tertiary': 'var(--sfpy-theme-button-tertiary-border)',
      'button-tertiary-disabled': 'var(--sfpy-theme-button-tertiary-disabled-border)',

      'button-quaternary': 'var(--sfpy-theme-button-quaternary-border)',
      'button-quaternary-disabled': 'var(--sfpy-theme-button-quaternary-disabled-border)',

      ...palette,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      default: 'var(--sfpy-theme-text-default)',
      secondary: 'var(--sfpy-theme-text-secondary)',
      tertiary: 'var(--sfpy-theme-text-tertiary)',
      quaternary: 'var(--sfpy-theme-text-quaternary)',
      link: 'var(--sfpy-theme-text-link)',
      success: 'var(--sfpy-theme-text-success)',
      warning: 'var(--sfpy-theme-text-warning)',
      danger: 'var(--sfpy-theme-text-danger)',
      info: 'var(--sfpy-theme-text-info)',

      'primary-blue': 'var(--sfpy-color-primary-blue)',
      'primary-black': 'var(--sfpy-color-primary-black)',
      'primary-white': 'var(--sfpy-color-primary-white)',
      'primary-grey': 'var(--sfpy-grey-3)',
      'secondary-grey': 'var(--sfpy-grey-5)',

      'icon-default': 'var(--sfpy-theme-icon-default)',
      'icon-secondary': 'var(--sfpy-theme-icon-secondary)',
      'icon-tertiary': 'var(--sfpy-theme-icon-tertiary)',
      'icon-quaternary': 'var(--sfpy-theme-icon-quaternary)',
      'icon-success': 'var(--sfpy-theme-icon-success)',
      'icon-warning': 'var(--sfpy-theme-icon-warning)',
      'icon-danger': 'var(--sfpy-theme-icon-danger)',
      'icon-info': 'var(--sfpy-theme-icon-info)',

      'button-primary': 'var(--sfpy-theme-button-primary-text)',
      'button-primary-icon': 'var(--sfpy-theme-button-primary-icon)',
      'button-primary-disabled': 'var(--sfpy-theme-button-primary-disabled-text)',
      'button-primary-destructive': 'var(--sfpy-theme-button-primary-destructive-text)',
      'button-primary-destructive-icon': 'var(--sfpy-theme-button-primary-destructive-icon)',
      'button-primary-destructive-disabled': 'var(--sfpy-theme-button-primary-destructive-disabled-text)',

      'button-secondary': 'var(--sfpy-theme-button-secondary-text)',
      'button-secondary-icon': 'var(--sfpy-theme-button-secondary-icon)',
      'button-secondary-disabled': 'var(--sfpy-theme-button-secondary-disabled-text)',
      'button-secondary-destructive': 'var(--sfpy-theme-button-secondary-destructive-text)',
      'button-secondary-destructive-icon': 'var(--sfpy-theme-button-secondary-destructive-icon)',
      'button-secondary-destructive-disabled': 'var(--sfpy-theme-button-secondary-destructive-disabled-text)',

      'button-tertiary': 'var(--sfpy-theme-button-tertiary-text)',
      'button-tertiary-icon': 'var(--sfpy-theme-button-tertiary-icon)',
      'button-tertiary-disabled': 'var(--sfpy-theme-button-tertiary-disabled-text)',

      'button-quaternary': 'var(--sfpy-theme-button-quaternary-text)',
      'button-quaternary-icon': 'var(--sfpy-theme-button-quaternary-icon)',
      'button-quaternary-disabled': 'var(--sfpy-theme-button-quaternary-disabled-text)',

      ...palette,
    },
    boxShadow: {
      none: 'var(--sfpy-theme-shadows-none)',
      xs: 'var(--sfpy-theme-shadows-xs)',
      sm: 'var(--sfpy-theme-shadows-sm)',
      md: 'var(--sfpy-theme-shadows-md)',
      lg: 'var(--sfpy-theme-shadows-lg)',
      xl: 'var(--sfpy-theme-shadows-xl)',
    },
    fontSize: {
      lg: [
        '20px',
        {
          lineHeight: 1.5,
        },
      ],
      base: [
        '16px',
        {
          lineHeight: 1.625,
          letterSpacing: '-0.011rem',
        },
      ],
      sm: [
        '15px',
        {
          lineHeight: 1.6,
          letterSpacing: '-0.009rem',
        },
      ],
      xs: [
        '14px',
        {
          lineHeight: 1.57,
          letterSpacing: '-0.006rem',
        },
      ],
      '2xs': [
        '13px',
        {
          lineHeight: 1.61,
          letterSpacing: '-0.003rem',
        },
      ],
      '3xs': [
        '12px',
        {
          lineHeight: 1.58,
        },
      ],
    },
    heading: {
      '5xl': {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 3.815)',
        lineHeight: 1.2,
      },
      '4xl': {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 3.052)',
        lineHeight: 1.2,
      },
      '3xl': {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 2.441)',
        lineHeight: 1.3,
      },
      '2xl': {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 1.953)',
        lineHeight: 1.4,
      },
      xl: {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 1.563)',
        lineHeight: 1.5,
      },
      lg: {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 1.25)',
        lineHeight: 1.5,
      },
      base: {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 1)',
        lineHeight: 1.625,
      },
      sm: {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 0.8)',
        lineHeight: 1.615,
      },
      xs: {
        fontSize: 'calc(var(--sfpy-theme-heading-base-font-size) * 0.64)',
        lineHeight: 1.58,
      },
    },
    screens: {
      xs: '340px',
      sm: '420px',
      'sm-gutters': '468px',
      md: '740px',
      'md-gutters': '788px',
      lg: '960px',
      'lg-gutters': '1008px',
      xl: '1200px',
      'xl-gutters': '1248px',
    },
    extend: {
      stroke: {
        'bg-default': 'var(--sfpy-theme-background-default)',
        'bg-screen': 'var(--sfpy-theme-background-screen)',
        'bg-subtle': 'var(--sfpy-theme-background-subtle)',
        'bg-element': 'var(--sfpy-theme-background-element)',
        'bg-hover': 'var(--sfpy-theme-background-hover)',
        'bg-selected': 'var(--sfpy-theme-background-selected)',
        'bg-overlay': 'var(--sfpy-theme-background-overlay)',
        'bg-success': 'var(--sfpy-theme-background-success)',
        'bg-warning': 'var(--sfpy-theme-background-warning)',
        'bg-danger': 'var(--sfpy-theme-background-danger)',
        'bg-info': 'var(--sfpy-theme-background-info)',
      },
      backgroundColor: {
        'app-cyan': 'var(--sfpy-color-app-cyan)',
        'app-light-blue': 'var(--sfpy-color-app-light-blue)',
        'app-dark-blue': 'var(--sfpy-color-app-dark-blue)',
        'app-indigo': 'var(--sfpy-color-app-indigo)',
        'app-purple': 'var(--sfpy-color-app-purple)',
        'app-pink': 'var(--sfpy-color-app-pink)',
        'app-orange': 'var(--sfpy-color-app-orange)',
        'app-gold': 'var(--sfpy-color-app-gold)',
        'app-yellow': 'var(--sfpy-color-app-yellow)',
        'app-lime': 'var(--sfpy-color-app-lime)',
        'app-light-green': 'var(--sfpy-color-app-light-green)',
        'app-dark-green': 'var(--sfpy-color-app-dark-green)',
        transparent: 'transparent',
      },
      height: {
        15: '3.75rem',
      },
      width: {
        15: '3.75rem',
      },
      size: {
        15: '3.75rem',
      },
      opacity: {
        inherit: 'inherit',
      },
      scale: {
        98: '.98',
        1025: '1.025',
        175: '1.75',
        200: '2.0',
      },
      fontSize: {
        inherit: [
          'inherit',
          {
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            fontWeight: 'inherit',
          },
        ],
      },
      gridTemplateColumns: {
        'auto-min-1': 'auto',
        'auto-min-2': 'minmax(min-content, auto) min-content',
        'auto-min-3': 'minmax(min-content, auto) repeat(2, min-content)',
        'auto-min-4': 'minmax(min-content, auto) repeat(3, min-content)',
        'auto-min-5': 'minmax(min-content, auto) repeat(4, min-content)',
        'auto-min-6': 'minmax(min-content, auto) repeat(5, min-content)',
        'auto-min-7': 'minmax(min-content, auto) repeat(6, min-content)',
        'auto-min-8': 'minmax(min-content, auto) repeat(7, min-content)',
      },
      transitionDuration: {
        default: '150ms',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            sm: null,
            base: null,
            lg: null,
            xl: null,
            '2xl': null,
            invert: null,
          },
        },
      }),
    },
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [
    plugin(({ addComponents, addVariant, matchUtilities, theme }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      matchUtilities({ heading: (value) => value }, { values: theme('heading') });
      addComponents({
        '.icon-2xs': {
          height: theme('height.3'),
          width: theme('width.3'),
        },
        '.icon-xs': {
          // note(simek): figure out how to access `h-3.5` using path
          height: '0.875rem',
          width: '0.875rem',
        },
        '.icon-sm': {
          height: theme('height.4'),
          width: theme('width.4'),
        },
        '.icon-md': {
          height: theme('height.5'),
          width: theme('width.5'),
        },
        '.icon-lg': {
          height: theme('height.6'),
          width: theme('width.6'),
        },
        '.icon-xl': {
          height: theme('height.8'),
          width: theme('width.8'),
        },
        '.icon-2xl': {
          height: theme('height.10'),
          width: theme('width.10'),
        },
        '.break-words': { 'word-break': 'break-word' },
        '.pause-animation': { 'animation-play-state': 'paused' },
        '.transform-box': { 'transform-box': 'fill-box' },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.variant-numeric-normal': {
          'font-variant-numeric': 'normal',
        },
        '.variant-numeric-slashed': {
          'font-variant-numeric': 'slashed-zero',
        },
        '.variant-numeric-tubular': {
          'font-variant-numeric': 'tabular-nums',
        },
      });
    }),
    require('@tailwindcss/typography'),
  ],
};

module.exports = sfpyTailwindConfig;
