import { css } from "vue3-styled-components";

export type ShapeType =
  | "ExtraSmall"
  | "Small"
  | "Medium"
  | "Large"
  | "ExtraLarge";

export type ShapeStyleType = {
  [key in ShapeType]: ReturnType<typeof css>;
};

export const DevFolioShape: ShapeStyleType = Object.freeze({
  ExtraSmall: css`
    border-radius: 8px;
  `,
  Small: css`
    border-radius: 12px;
  `,
  Medium: css`
    border-radius: 16px;
  `,
  Large: css`
    border-radius: 20px;
  `,
  ExtraLarge: css`
    border-radius: 32px;
  `,
});
