import { css } from "vue3-styled-components";

export type TextSize =
  | "DisPlay1"
  | "DisPlay2"
  | "Title1"
  | "Title2"
  | "Heading1"
  | "Heading2"
  | "Headline"
  | "Body1"
  | "Body2"
  | "Label"
  | "Caption";

export type TextWeight = "Bold" | "Medium" | "Regular";

export type TypographyWeightType = {
  [key in TextWeight]: ReturnType<typeof css>;
};

export type TypographyStyleType = {
  [key in TextSize]: TypographyWeightType;
};

export const DevFolioTypography: TypographyStyleType = Object.freeze({
  DisPlay1: {
    Bold: css`
      font-size: 36px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 36px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 36px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  DisPlay2: {
    Bold: css`
      font-size: 32px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 32px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 32px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Title1: {
    Bold: css`
      font-size: 28px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 28px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 28px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Title2: {
    Bold: css`
      font-size: 24px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 24px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 24px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Heading1: {
    Bold: css`
      font-size: 22px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 22px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 22px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Heading2: {
    Bold: css`
      font-size: 20px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 20px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 20px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Headline: {
    Bold: css`
      font-size: 18px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 18px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 18px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Body1: {
    Bold: css`
      font-size: 16px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 16px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 16px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Body2: {
    Bold: css`
      font-size: 14px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 14px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 14px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Label: {
    Bold: css`
      font-size: 12px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 12px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 12px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },

  Caption: {
    Bold: css`
      font-size: 10px;
      font-family: "Pretendard-Bold";
      line-height: 130%;
    `,
    Medium: css`
      font-size: 10px;
      font-family: "Pretendard-Medium";
      line-height: 130%;
    `,
    Regular: css`
      font-size: 10px;
      font-family: "Pretendard-Regular";
      line-height: 130%;
    `,
  },
});
