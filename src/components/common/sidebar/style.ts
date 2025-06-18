import styled from "vue3-styled-components";
import { DevFolioColor } from "@/design/color/sementic";
import { DevFolioTypography } from "@/design/typography/typography";

const itemProps = { isSelect: Boolean };

export const Container = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${() => DevFolioColor.lineNormal};
  background-color: ${() => DevFolioColor.backgroundNormal};
  padding: 40px 30px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;

export const Menu = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled("div", itemProps)`
  color: ${({ isSelect }) =>
    isSelect ? DevFolioColor.primaryNormal : DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Headline.Bold};
  cursor: pointer;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Profile = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  color: ${() => DevFolioColor.labelNormal};
  ${() => DevFolioTypography.Body1.Bold};
`;

export const Logout = styled.p`
  color: ${() => DevFolioColor.statusNegative};
  ${() => DevFolioTypography.Body2.Bold};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
