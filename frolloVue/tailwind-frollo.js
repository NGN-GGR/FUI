/* ============================================================
   Shared Tailwind Play CDN config for the Frollo application.
   Loaded after the CDN script on every page.
   ============================================================ */
tailwind.config = {
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',

      // Brand
      primary: '#512ABD',
      'primary-hover': '#854cff',
      'primary-dark': '#3A1E8A',
      'primary-tertiary-fade': '#f5f3ff',
      secondary: '#141414',
      tertiary: '#FFFFFF',

      // State
      success: '#00C696',
      'success-bg': '#D8FFF6',
      'success-new': '#4BF0C8',
      error: '#E74C4C',
      'error-bg': '#FEE0D9',
      warning: '#FB6340',
      info: '#0DCAF0',

      // Text
      'text-default': '#393C56',
      'text-secondary': '#5F6489',
      'text-tertiary': '#8B8FAC',
      'text-accent': '#CDC3FF',
      'text-on-dark': '#FFFFFF',

      // Backgrounds
      'app-bg': '#F7F7F7',
      'bg-dark': '#292B3D',
      'bg-pink': '#FDDBFD',
      'bg-coral': '#FEE0D9',
      'bg-sky': '#D4EDF7',
      'button-secondary-bg': '#E6E1FF',

      // Borders
      'border-default': '#AFB2C7',
      'border-accent': '#CDC3FF',
      'border-strong': '#8E7DFF',

      // Greys
      grey: {
        base: '#4B4B4B',
        light: '#BCBCBC',
        lightest: '#F5F5F5',
        10: '#F8F8F8',
        20: '#F2F2F2',
        30: '#EEEFF1',
        40: '#E4E4E4',
        60: '#DEE0E3',
        80: '#C9C9C9',
        100: '#C8CBD0',
      },
    },
    fontFamily: {
      sans: ['Forma DJR Text', 'system-ui', '-apple-system', 'sans-serif'],
      frollo: ['Forma DJR Text', 'system-ui', '-apple-system', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '19px', letterSpacing: '0.4px' }],
      sm: ['14px', { lineHeight: '19px', letterSpacing: '0.45px' }],
      base: ['16px', { lineHeight: '19px', letterSpacing: '0.45px' }],
      lg: ['18px', '1.5'],
      xl: ['20px', { lineHeight: '26px', letterSpacing: '0.4px', fontWeight: '500' }],
      '2xl': ['20px', { lineHeight: '26px', letterSpacing: '0.4px', fontWeight: '500' }],
      '3xl': ['42px', { lineHeight: '46px', letterSpacing: '0.84px' }],
      p: ['20px', { lineHeight: '26px', letterSpacing: '0.4px' }],
      'p-small': ['15px', { lineHeight: '19px', letterSpacing: '0.45px' }],
      p2: ['14px', { lineHeight: '19px', letterSpacing: '0.45px' }],
    },
    boxShadow: {
      card: '0px 4px 4px rgba(0, 0, 0, 0.1714)',
      top: '0 -1px 0 0 rgba(20, 20, 20, 0.25)',
      bottom: '0px 1px 0px rgba(20, 20, 20, 0.25)',
      dropdown: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      none: 'none',
    },
    extend: {
      minWidth: { banner: '420px' },
      backgroundImage: {
        'frollo-gradient': 'linear-gradient(87.77deg, #D327E7, #512ABD 23.8%, #512ABD 42.37%, #00D19F)',
      },
    },
  },
};
