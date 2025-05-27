import { palette } from "./pallete";

export const DevFolioColor = Object.freeze({
  // Primary
  primaryNormal: palette.blue30,
  primaryAlternative: "#588EBC",
  primaryAssistive: "#97B9D5",

  // Label
  labelNormal: palette.neutral5,
  labelStrong: palette.common00,
  labelNeutral: palette.neutral25,
  labelAlternative: palette.neutral40,
  labelAssistive: palette.neutral50,

  // Line
  lineNormal: palette.neutral90,
  lineNeutral: palette.neutral95,
  lineAlternative: palette.neutral97,

  // Fill
  fillNormal: palette.neutral97,
  fillNeutral: palette.neutral95,
  fillAlternative: palette.neutral90,
  fillSupport: palette.common100,
  fillAssistive: palette.neutral99,

  // Background
  backgroundNormal: palette.common100,
  backgroundNeutral: palette.neutral99,
  backgroundAlternative: palette.neutral97,
});

export type DevFolioColorType = typeof DevFolioColor;
