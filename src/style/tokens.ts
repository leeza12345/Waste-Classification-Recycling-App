/**
 * EcoShift Design System Tokens
 * Source: Waste Management UI & Style Guide Specification
 */

export const Colors = {
  // Primary — Eco Green Palette
  primary: {
    50: '#EDF7EE', // Tint bg / Active pill bg
    100: '#C8E6C9', // Light mint / Tag bg
    400: '#66BB6A', // Accent / Medium green
    600: '#2E7D32', // Main Brand Green
    700: '#256528', // Active text / Darker green
    800: '#1B5E20', // Pressed state / Dark forest green
  },

  // Secondary — Teal Palette
  secondary: {
    100: '#B2DFDB', // Thumbnails / Light teal
    500: '#00897B', // FAB / Teal action
    700: '#00695C', // Dark teal
  },

  // Neutrals — Text & Surfaces
  neutral: {
    textPrimary: '#1B1F1C', // Heading & main text
    textSecondary: '#55605A', // Secondary / Subtitle text
    placeholder: '#8A948E', // Placeholder & disabled text
    border: '#DCE3DE', // Neutral / 300 - Dividers & borders
    surfaceAlt: '#F1F5F1', // Segment track / Alt cards
    background: '#FBFAFB', // App background
    white: '#FFFFFF',
    black: '#000000',
  },

  // Waste Category Colors
  categories: {
    plastic: '#1E88E5', // Blue
    paper: '#FB8C00', // Orange
    glass: '#00897B', // Teal
    organic: '#7CB342', // Green
    eWaste: '#8E24AA', // Purple
    metal: '#757575', // Grey
  },

  // Semantic Status Colors
  status: {
    success: '#2E7D32',
    error: '#D32F2F',
    warning: '#FFA000',
    info: '#0288D1',
  },

  // Light / Dark Theme Mapping for Expo / React Native
  light: {
    text: '#1B1F1C',
    textSecondary: '#55605A',
    placeholder: '#8A948E',
    background: '#FBFAFB',
    backgroundElement: '#F1F5F1',
    backgroundSelected: '#EDF7EE',
    border: '#DCE3DE',
    primary: '#2E7D32',
    primaryPressed: '#1B5E20',
    primaryTint: '#EDF7EE',
    card: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceAlt: '#F1F5F1',
  },
  dark: {
    text: '#F5F7F5',
    textSecondary: '#A0ABA4',
    placeholder: '#636E67',
    background: '#121513',
    backgroundElement: '#1D221E',
    backgroundSelected: '#1B3820',
    border: '#2A332C',
    primary: '#4CAF50',
    primaryPressed: '#2E7D32',
    primaryTint: '#1B3820',
    card: '#1D221E',
    surface: '#1D221E',
    surfaceAlt: '#262D28',
  },
} as const;

export const Spacing = {
  xs: 4, // 4px — tight / inline gaps
  sm: 8, // 8px — base unit
  md: 12, // 12px — grid gutter
  base: 16, // 16px — outer margin / default padding
  lg: 24, // 24px — section gaps
  xl: 32, // 32px — large spacing
  '2xl': 48, // 48px — hero spacing
} as const;

export const CornerRadius = {
  xs: 6, // Chips / badges
  sm: 10, // Text inputs / search bar
  md: 14, // Cards / list items / stat cards
  lg: 20, // Modals / bottom sheets
  full: 9999, // FAB / pill buttons / active indicators
} as const;

export const Typography = {
  fontFamily: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    light: 'Poppins-Light',
  },
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
  displayH1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700' as const,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700' as const,
  },
  h3: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600' as const,
  },
  overline: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as const,
    letterSpacing: 1,
    textTransform: 'uppercase' as const,
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400' as const,
  },
  buttonLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500' as const,
  },
  buttonSmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
} as const;

export const Shadows = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  card: {
    shadowColor: '#1B1F1C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  fab: {
    shadowColor: '#00897B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
} as const;

export const Grid = {
  columns: 4,
  outerMargin: 16,
  gutter: 12,
  baseUnit: 8,
} as const;

export const ComponentStyles = {
  button: {
    primary: {
      height: 52,
      borderRadius: CornerRadius.sm + 2, // 12px
      backgroundColor: Colors.primary[600],
      paddingHorizontal: 24,
    },
    secondary: {
      height: 50,
      borderRadius: CornerRadius.sm + 2, // 12px
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.primary[600],
      paddingHorizontal: 22,
    },
    text: {
      height: 'auto',
      backgroundColor: 'transparent',
      paddingHorizontal: 4,
    },
    fab: {
      width: 56,
      height: 56,
      borderRadius: CornerRadius.full,
      backgroundColor: Colors.secondary[500],
    },
  },
  input: {
    height: 48,
    borderRadius: CornerRadius.sm, // 10px
    borderWidth: 1,
    borderColor: Colors.neutral.border,
    paddingHorizontal: 16,
    backgroundColor: Colors.neutral.white,
  },
  card: {
    borderRadius: CornerRadius.md, // 14px
    borderWidth: 0.75,
    borderColor: Colors.neutral.border,
    padding: Spacing.base,
    backgroundColor: Colors.neutral.white,
  },
  topAppBar: {
    height: 56,
    backgroundColor: Colors.neutral.white,
  },
  bottomTabBar: {
    height: 64,
    backgroundColor: Colors.neutral.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral.border,
  },
} as const;
