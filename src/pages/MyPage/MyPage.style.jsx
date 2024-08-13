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
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
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
  width: 97px;
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 68.239px;
  background:
    linear-gradient(
      0deg,
      rgba(45, 41, 255, 0.3) 0%,
      rgba(45, 41, 255, 0.3) 100%
    ),
    url(<path-to-image>) lightgray 50% / cover no-repeat;
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
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
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

export const InfoBar = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 8px;
`;

//폰트
export const GrayFont = styled.div`
  color: var(--grey2, #949494);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const BlackFont = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

// 모달
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(88, 88, 88, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 328px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  background: #fff;
  box-shadow: 4px 4px 24.1px 0px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.div``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalTitle = styled.h2`
  color: var(--primary, #2d29ff);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const QrImage = styled.div`
  width: 143px;
  height: 143px;
  border: 2px solid blue; /* 임시 코드 */
`;

export const ModalButtonWrapper = styled.div``;
