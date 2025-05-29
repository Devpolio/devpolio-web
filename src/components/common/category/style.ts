import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioTypography } from "@/design/typography/typography";
import { DevFolioShape } from "@/design/shape/shape";

export const Container = styled.div`
  min-width: 270px;
  width: 270px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small};
  background-color: ${() => DevFolioColor.backgroundNormal};
  gap: 30px;
  padding: 30px;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Headline.Bold};
`;

export const ItemWrap = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

export const ItemName = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;
