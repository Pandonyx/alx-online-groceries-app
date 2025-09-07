// Font configuration using Gilroy font family

import { Platform } from 'react-native';

export const fonts = {
  regular: {
    fontFamily: 'Gilroy-Regular',
  },
  medium: {
    fontFamily: 'Gilroy-Medium',
    fontWeight: '500' as const,
  },
  semiBold: {
    fontFamily: 'Gilroy-SemiBold',
    fontWeight: '600' as const,
  },
  bold: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: 'bold' as const,
  },
  heavy: {
    fontFamily: 'Gilroy-Heavy',
    fontWeight: '900' as const,
  },
  light: {
    fontFamily: 'Gilroy-Light',
    fontWeight: '300' as const,
  },
  thin: {
    fontFamily: 'Gilroy-Thin',
    fontWeight: '100' as const,
  },
  // Aliases for convenience
  gilroy: {
    fontFamily: 'Gilroy-Regular',
  },
  gilroyMedium: {
    fontFamily: 'Gilroy-Medium',
    fontWeight: '500' as const,
  },
  gilroySemiBold: {
    fontFamily: 'Gilroy-SemiBold',
    fontWeight: '600' as const,
  },
  gilroyBold: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: 'bold' as const,
  },
  gilroyHeavy: {
    fontFamily: 'Gilroy-Heavy',
    fontWeight: '900' as const,
  },
  gilroyLight: {
    fontFamily: 'Gilroy-Light',
    fontWeight: '300' as const,
  },
};

// Font sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
};
