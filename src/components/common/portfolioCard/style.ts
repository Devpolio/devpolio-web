import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioTypography } from "@/design/typography/typography";

export const Container = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  ${() => DevFolioShape.ExtraSmall};
  padding: 10px;
  gap: 20px;

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
  justify-content: space-between;
  align-items: center;
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
  cursor: pointer;
`;

export const LikeCount = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Label.Medium};
`;

export const NullPortfolio = styled.div`
  width: 100%;
  height: 150px;
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Body2.Bold};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const GetButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const PreviewButton = styled.button`
  color: ${() => DevFolioColor.staticWhite};
  ${() => DevFolioTypography.Label.Bold};
  ${() => DevFolioShape.Small};
  background-color: ${() => DevFolioColor.primaryNormal};
  padding: 8px 16px;
  cursor: pointer;
`;

export const DownloadButton = styled.button`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Label.Bold};
  ${() => DevFolioShape.Small};
  border: 1px solid ${() => DevFolioColor.lineNormal};
  background-color: ${() => DevFolioColor.fillAssistive};
  padding: 8px 16px;
  cursor: pointer;
`;

export const DeleteButtonWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModifyButton = styled.button`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Label.Bold};
  ${() => DevFolioShape.Small};
  border: 1px solid ${() => DevFolioColor.lineNormal};
  background-color: ${() => DevFolioColor.fillNeutral};
  padding: 8px 16px;
  cursor: pointer;
`;
