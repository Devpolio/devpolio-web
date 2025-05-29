import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioTypography } from "@/design/typography/typography";
import styled from "vue3-styled-components";

const ToggleProps = { isOpen: Boolean };

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
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.Small};
  background-color: ${() => DevFolioColor.backgroundNormal};
  padding: 30px;
  gap: 70px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Heading2.Bold};
`;

export const Form = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleAuthorInputWrap = styled.div`
  display: flex;
  gap: 30px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const Input = styled.input`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Medium};
  width: 320px;
  height: auto;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.ExtraSmall};
  padding: 15px;

  &::placeholder {
    color: ${() => DevFolioColor.labelAssistive};
  }
`;

export const VisibilityToggleWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VisibilityToggleTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const VisibilityToggle = styled("div", ToggleProps)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: ${({ isOpen }) => (isOpen ? "22px" : "10px")};
`;

export const VisibilityToggleText = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const Toggle = styled("div", ToggleProps)`
  width: 40px;
  height: auto;
  ${() => DevFolioShape.Small};
  background-color: ${({ isOpen }) =>
    isOpen ? DevFolioColor.primaryNormal : DevFolioColor.fillAlternative};
  padding: 2px;
  cursor: pointer;
`;

export const ToggleCircle = styled("div", ToggleProps)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${() => DevFolioColor.staticWhite};
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "translateX(18px)" : "translateX(0)")};
`;

export const CategoryWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectCategory = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};

  span {
    color: ${() => DevFolioColor.primaryNormal};
    ${() => DevFolioTypography.Body1.Bold};
    padding-left: 8px;
  }
`;

export const File = styled.div`
  max-width: 450px;
  aspect-ratio: 3 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.fillNormal};
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const Comment = styled.p`
  color: ${() => DevFolioColor.labelAssistive};
  ${() => DevFolioTypography.Label.Bold};
  position: absolute;
  bottom: 10px;
`;

export const PreviewWrap = styled.div`
  width: auto;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PreviewTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Headline.Bold};
`;

export const Preview = styled.iframe`
  max-width: 450px;
  aspect-ratio: 3 / 2;
  ${() => DevFolioShape.ExtraSmall};
  border: none;
  overflow: hidden;
  transform: scale(1.5);
  transform-origin: top left;
  margin-bottom: 50px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  color: ${() => DevFolioColor.staticWhite};
  ${() => DevFolioTypography.Body2.Bold};
  width: auto;
  height: auto;
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.primaryNormal};
  padding: 10px 20px;
  z-index: 1;
  cursor: pointer;
`;
