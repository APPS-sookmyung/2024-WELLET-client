import styled from '@emotion/styled';

export const CardDetail = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 85px;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 244px;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(111deg, #2d29ff 35.96%, #721cff 116.82%);
  position: relative;
  padding: 24px 20px 12px;
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
  width: 78px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled.div`
  padding: 4px 10px;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MidBar = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 18px 0 12px;
  justify-content: center;
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

export const BotBar = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
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
  padding: 0px;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BottomContainer = styled.div`
  width: 100%;
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

  svg {
    padding: 4px 4px 8px 4px;
    cursor: pointer;
  }
`;

export const IconBox = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
`;

export const ConBar = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 8px;
`;

export const GroupButtonBar = styled.div`
  width: 100%;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 8px;
`;

export const GroupButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--primary, #2d29ff);
  padding: 4px 10px;
  color: var(--white, #fff);
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.55px;
  border: none;
  outline: none;

  p {
    padding-right: 8px;
    white-space: nowrap;
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
  width: 100%;
  justify-content: baseline;
`;

export const CardImageBox = styled.div`
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const Modal = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px;
  padding: 10px;
  cursor: pointer;
`;

export const UserInfoLabel = styled.div`
  color: var(--grey2, #949494);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const UserInfoValue = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const NameFont = styled.div`
  color: var(--white, #fff);
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const JobTeamFont = styled.div`
  color: var(--white, #fff);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ComFont = styled.div`
  color: var(--grey1, #c8c8c8);
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;
