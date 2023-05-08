export const defaultTheme = {
  colors: {
    primary_500: 'rgba(0, 75, 255, 1)',
    danger_500: 'rgba(234, 84, 98, 1)',
    white: 'rgba(255, 255, 255, 255)',
    gray_100: 'rgba(237, 237, 237, 1)',
    gray_200: 'rgba(204, 204, 204, 1)',
    gray_300: 'rgba(179, 179, 179, 1)',
    gray_400: 'rgba(153, 153, 153, 1)',
    gray_500: 'rgba(128, 128, 128, 1)',
    gray_600: 'rgba(105, 105, 105, 1)',
    gray_700: 'rgba(77, 77, 77, 1)',
    gray_800: 'rgba(51, 51, 51, 1)',
    gray_900: 'rgba(18, 18, 18, 1)',
  } as const,
  typography: {
    heading: {
      xxl: '4rem',
      xl: '3rem',
      lg: '2rem',
      md: '1.5rem',
      sm: '1.25rem',
    } as const,
    text: {
      xl: '1.25rem',
      lg: '1.12rem',
      md: '1rem',
      sm: '0.88rem',
      xs: '0.75rem',
    } as const,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    } as const,
  } as const,
}

export type ColorThemeType = keyof typeof defaultTheme.colors

export type TitleFontSize = keyof typeof defaultTheme.typography.heading
export type TextFontSize = keyof typeof defaultTheme.typography.text
export type WeightFont = keyof typeof defaultTheme.typography.weight
