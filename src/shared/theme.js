const palette = {
  blueColor: "#006CFF",
  dimmedBlueColor: "#B2D2FF",
  whiteColor: "#FFF",
  lightGrayColor: "#DADADA",
  grayColor: "#777",
  darkGrayColor: "#333",
  trasparentBlackColor: "#0005",
};

const sizeGrid = {
  /** eight-point size grid */
  half: 4,
  base: 8,
  double: 16,
  triple: 24,
  quadruple: 32,
  tenfold: 80,
  hundredfold: 800,
};

export const lightTheme = {
         colors: {
           text: palette.darkGrayColor,
           background: palette.whiteColor,
           primary: palette.blueColor,
           secondary: palette.dimmedBlueColor,
           shadow: palette.trasparentBlackColor,
           palette,
         },
         sizeGrid,
       };

export const darkTheme = {
         colors: {
           text: palette.whiteColor,
           background: palette.darkGrayColor,
           primary: palette.dimmedBlueColor,
           secondary: palette.grayColor,
           shadow: palette.trasparentBlackColor,
           palette,
         },
         sizeGrid,
       };
