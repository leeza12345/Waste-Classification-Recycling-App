/**
 * Below are the colors and theme constants used in the app, matching the EcoShift Design System.
 */

import '@/global.css';

import { Platform } from 'react-native';
import { Colors as StyleColors, Spacing as StyleSpacing } from '@/style/tokens';

export const Colors = StyleColors;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'Poppins',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Poppins',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-family-base)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: StyleSpacing.xs, // 4
  two: StyleSpacing.sm, // 8
  three: StyleSpacing.base, // 16
  four: StyleSpacing.lg, // 24
  five: StyleSpacing.xl, // 32
  six: 64,
  ...StyleSpacing,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
