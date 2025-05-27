import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioTypography } from "@/design/typography/typography";
import { DevFolioShape } from "@/design/shape/shape";
import { DevFolioShadow } from "@/design/shadow/shadow";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${() => DevFolioColor.backgroundNeutral};
`;

export const Wrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${() => DevFolioShape.ExtraSmall}
  background-color: transparent;
  ${() => DevFolioShadow.Strong}
  padding: 50px;
  gap: 70px;
`;

export const Title = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Title1.Bold};
`;

export const Info = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputTitle = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const Input = styled.input`
  width: 350px;
  height: auto;
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Medium};
  border: 1px solid ${() => DevFolioColor.lineNormal};
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.backgroundNormal};
  padding: 15px;

  &::placeholder {
    color: ${() => DevFolioColor.labelAssistive};
  }
`;

export const ButtonWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 350px;
  height: auto;
  color: ${() => DevFolioColor.staticWhite};
  ${() => DevFolioTypography.Body1.Bold};
  ${() => DevFolioShape.ExtraSmall};
  background-color: ${() => DevFolioColor.primaryNormal};
  padding: 15px 0;
`;

export const TextWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body2.Bold};
`;

export const Link = styled.p`
  color: ${() => DevFolioColor.primaryNormal};
  ${() => DevFolioTypography.Body2.Medium};
  cursor: pointer;
`;
