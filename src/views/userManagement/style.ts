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

export const Title = styled.p`
  width: 100%;
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Heading2.Bold};
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
