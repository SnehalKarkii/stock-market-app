export type Sizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  '1x': number;
  '2x': number;
  '3x': number;
  '4x': number;
  '5x': number;
};

export const fontSizes: Sizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  '1x': 20,
  '2x': 24,
  '3x': 30,
  '4x': 40,
  '5x': 50,
};

export const spacing: Sizes = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  '1x': 20,
  '2x': 24,
  '3x': 30,
  '4x': 40,
  '5x': 50,
};

export const colors = {
  primary: '#FFDB5C',
  white: '#fff',
  grey: '#6b6e77',
  brown:"#D2B48C",
  yellow:"#664229"
};

export const createTheme = () => {
  const theme = {
    colors,
    fontSizes,
    spacing,
  };

  return theme;
};

const theme = createTheme();
export type ThemeType = typeof theme;
 