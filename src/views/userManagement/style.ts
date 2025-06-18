import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioTypography } from "@/design/typography/typography";

const buttonProps = { isAtv: Boolean };

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
  align-items: center;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small}
  background-color: ${() => DevFolioColor.backgroundNormal};
  padding: 30px;
  gap: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.p`
  width: 100%;
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Heading2.Bold};
`;

export const TopWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  ${() => DevFolioShape.Small};
  background-color: ${() => DevFolioColor.fillAlternative};
  padding: 3px;
`;

export const Button = styled("button", buttonProps)`
  z-index: 1;
  color: ${({ isAtv }) =>
    isAtv ? DevFolioColor.labelNormal : DevFolioColor.labelAlternative};
  ${() => DevFolioTypography.Body2.Bold};
  ${() => DevFolioShape.Small};
  background-color: ${({ isAtv }) =>
    isAtv ? DevFolioColor.staticWhite : "transparent"};
  padding: 10px 20px;
  cursor: pointer;
`;

export const Search = styled.input`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Medium};
  width: 300px;
  height: auto;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small};
  padding: 5px 10px;
`;

export const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: ${() => DevFolioColor.fillAlternative};
  padding: 8px 0;
  border-top: 1px solid ${() => DevFolioColor.lineNormal};
  border-bottom: 1px solid ${() => DevFolioColor.lineNormal};
`;

export const TBody = styled.tbody`
  border-bottom: 1px solid ${() => DevFolioColor.lineNormal};
`;

export const Th = styled.th`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
  padding: 12px 0px;
`;

export const Td = styled.th`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
  padding: 12px 0px;
`;
