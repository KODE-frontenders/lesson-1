const colors = {
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
                  text: colors.darkGrayColor,
                  background: colors.whiteColor,
                  primary: colors.blueColor,
                  secondary: colors.lightGrayColor,
                  shadow: colors.trasparentBlackColor,
                  colors,
                },
                sizeGrid,
              };

export const darkTheme = {
                colors: {
                  text: colors.whiteColor,
                  background: colors.darkGrayColor,
                  primary: colors.dimmedBlueColor,
                  secondary: colors.grayColor,
                  shadow: colors.trasparentBlackColor,
                  colors,
                },
                sizeGrid,
              };
