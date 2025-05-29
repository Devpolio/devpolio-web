import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioTypography } from "@/design/typography/typography";

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
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small}
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
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Heading2.Bold};
`;

export const CreateButton = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.primaryNormal};
  padding: 10px;
  gap: 10px;
  cursor: pointer;
`;

export const CreateText = styled.p`
  color: ${() => DevFolioColor.staticWhite};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const ListWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const List = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;
