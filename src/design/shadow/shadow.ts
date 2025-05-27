import { css } from "vue3-styled-components";

export type ShadowType = "Normal" | "Emphasize" | "Strong" | "Heavy";

export type ShadowStyleType = {
  [key in ShadowType]: ReturnType<typeof css>;
};

export const DevFolioShadow: ShadowStyleType = Object.freeze({
  Normal: css`
    box-shadow: 
      0px 1px 2px rgba(0, 0, 0, 0.12),
      0px 0px 1px rgba(0, 0, 0, 0.08),
      0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
  Emphasize: css`
    box-shadow: 
      0px 2px 8px rgba(0, 0, 0, 0.12),
      0px 1px 4px rgba(0, 0, 0, 0.08),
      0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
  Strong: css`
    box-shadow: 
      0px 6px 12px rgba(0, 0, 0, 0.12),
      0px 4px 8px rgba(0, 0, 0, 0.08),
      0px 0px 4px rgba(0, 0, 0, 0.08);
  `,
  Heavy: css`
    box-shadow: 
      0px 16px 20px rgba(0, 0, 0, 0.12),
      0px 8px 16px rgba(0, 0, 0, 0.08),
      0px 0px 8px rgba(0, 0, 0, 0.08);
  `,
});
