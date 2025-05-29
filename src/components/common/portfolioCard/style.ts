import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioTypography } from "@/design/typography/typography";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  ${() => DevFolioShape.ExtraSmall};
  padding: 10px;
  gap: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${() => DevFolioColor.fillNormal};
  }
`;

export const Img = styled.img`
  aspect-ratio: 9 / 5;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.backgroundNormal};
`;

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Info = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const Content = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 10px;
`;

export const Text = styled.p`
  color: ${() => DevFolioColor.labelAlternative};
  ${() => DevFolioTypography.Label.Bold};
  white-space: nowrap;
`;

export const Like = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LikeCount = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Label.Medium};
`;
