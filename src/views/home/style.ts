import styled, { css } from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioTypography } from "@/design/typography/typography";
import { DevFolioShape } from "@/design/shape/shape";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Wrap = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  display: flex;
  background-color: ${() => DevFolioColor.backgroundNeutral};
  padding: 30px;
  gap: 10px;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 77%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small};
  background-color: ${() => DevFolioColor.backgroundNormal};
  padding: 30px;
  gap: 35px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Heading2.Bold};
`;

export const CurrentCategory = styled.p`
  color: ${() => DevFolioColor.labelAlternative};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const RankWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RankTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const RankList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PortfolioWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PortfolioTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const PortfolioList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.ExtraSmall};
  cursor: pointer;
`;

export const PortfolioInfoWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 30px;
`;

export const PortfolioImg = styled.img`
  aspect-ratio: 1 / 1;
  ${() => DevFolioShape.ExtraSmall};
`;

export const PortfolioInfo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const PortfolioTitleText = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const PortfolioContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PortfolioContentText = styled.div`
  color: ${() => DevFolioColor.labelAlternative};
  ${() => DevFolioTypography.Label.Bold};
`;

export const PortfolioLikeWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding-right: 30px;
  gap: 5px;
  cursor: pointer;
`;

export const PortfolioLikeCount = styled.p`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Label.Medium};
`;

export const NullPortfolio = styled.div`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Body2.Bold};
  aspect-ratio: 3 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
