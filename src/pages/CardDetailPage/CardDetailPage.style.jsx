import styled from '@emotion/styled';

export const TopContainer = styled.div`
  width: 100%;
  height: 244px;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(111deg, #2d29ff 35.96%, #721cff 116.82%);
  position: relative;
  padding: 20px;
`;

export const TopBar = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`;

export const LeftContainer1 = styled.div`
  width: 60px;
`;

export const MyName = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
`;

export const EditIcon = styled.div`
  padding: 4px 10px;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  width: 60px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MidBar = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 24px 0;
  justify-content: space-between;
`;

export const LeftContainer2 = styled.div`
  width: 97px;
`;

export const PicContainer = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 68.239px;
  background: #ffffff;
  position: relative;
`;

export const IconBarContainer = styled.div`
  width: 97px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

export const Dot3Icon = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

export const BotBar = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NameBox = styled.div`
  letter-spacing: -0.5px;
  text-align: center;
`;

export const SubBar = styled.div`
  width: 72px;
  height: 5px;
  border-radius: 4px;
  background: #8776ff;
  padding: 0 20px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 724px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

export const InfoBox = styled.div`
  width: 100%;
  padding: 2px;
`;

export const InfoContainer = styled.div`
  border-radius: 10px;
  background: #f4f4f9;
  width: 100%;
  padding: 12px;
`;

export const ContactContainer = styled.div`
  border-radius: 10px;
  background: #f4f4f9;
  width: 100%;
  padding: 12px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const ConBar = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 8px;
`;

export const GroupButtonBar = styled.div`
  width: 100%;
  color: var(--grey3, #555);
  font-size: 11px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 8px;
`;

export const GroupButtonBox = styled.div`
  width: 100%;
`;

//폰트
export const userInfoLabel = styled.div`
  color: var(--grey2, #949494);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const userInfoValue = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const NameFont = styled.div`
  color: var(--white, #fff);
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const JobTeamFont = styled.div`
  color: var(--white, #fff);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ComFont = styled.div`
  color: var(--grey1, #c8c8c8);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;
