/**
 * Sistema de theming basico - Semana 02
 * J&R Tech - Reparacion de Celulares
 */

export const COLORS = {
  primary: '#000000',
  primaryLight: '#1a1a1a',
  accent: '#cf4419',
  accentGreen: '#03b421',
  accentBlue: '#122dc9',

  background: '#f5f5f5',
  surface: '#ffffff',
  border: '#e5e5e5',

  textPrimary: '#000000',
  textSecondary: '#333333',
  textMuted: '#888888',
  textLight: '#999999',
  textInverse: '#ffffff',

  statusPending: '#cf4419',
  statusInProgress: '#03b421',
  statusCompleted: '#122dc9',
} as const;

export const TYPOGRAPHY = {
  headerTitle: {
    fontSize: 28,
    fontWeight: '800' as const,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
  },
  cardBrand: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 13,
    fontWeight: '400' as const,
  },
  label: {
    fontSize: 12,
    fontWeight: '500' as const,
  },
  badge: {
    fontSize: 11,
    fontWeight: '600' as const,
  },
  caption: {
    fontSize: 11,
    fontWeight: '400' as const,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;
