import pxtorem from "./utils/pxtorem";

type colorsType = { [name: string]: string };
type fontSizesType = { [name: string]: string };

export const colors: colorsType = {
  black: "#333",
  white: "#fff",
};

export const fontSizes: fontSizesType = {
  "24px": pxtorem(24),
  "20px": pxtorem(20),
  "18px": pxtorem(18),
  "16px": pxtorem(16),
  "14px": pxtorem(14),
  "12px": pxtorem(12),
  "8px": pxtorem(8),
};

const theme = {
  ...colors,
  ...fontSizes,
};

export default theme;
