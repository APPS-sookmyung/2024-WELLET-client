import styled from '@emotion/styled';

export const MyPage = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 85px;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 244px;
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

export const MyCardTitle = styled.div`
  display: flex;
  justify-content: center;
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
  width: 60px;
`;

export const EditButton = styled.a`
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
  justify-content: space-between;
`;

export const LeftContainer2 = styled.div`
  width: 31px;
`;

export const ShareIconWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 31px;
  height: 38px;
  cursor: pointer;
  padding: 16px 10px;
`;

export const MyInfoSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0 0;
  gap: 14px;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 97px;
  border-radius: 50%;
  border: 1px solid white; /* 임시 코드 */
  background-color: white;
`;

export const BotBar = styled.div`
  width: 100%;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const MyName = styled.div`
  color: var(--white, #fff);
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const SubBar = styled.div`
  width: 72px;
  height: 5px;
  border-radius: 4px;
  background: #8776ff;
  padding: 0 20px;
  gap: 0px;
`;

// 내 상세 정보
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  gap: 26px;
`;

export const MyInfoIList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MyInfoTitle = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 0 6px;
`;

export const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: #f4f4f9;
  width: 100%;
  padding: 12px 17px;
  gap: 13px;
`;

export const MyInfoItem = styled.div`
  width: 100%;
  padding: 2px;
`;

export const MyInfoLabel = styled.div`
  color: var(--grey2, #949494);
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const MyInfoValue = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const MyInfoValueNull = styled.div`
  color: #ff0076;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
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

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px;
  padding: 10px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 9px;
`;

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const CopyLinkButton = styled(ButtonBase)`
  gap: 4px;
  background: var(--blue-2, #ebebff);
  color: var(--primary, #2d29ff);
`;

export const SaveButton = styled(ButtonBase)`
  gap: 8px;
  background: var(--primary, #2d29ff);
  color: #fff;
`;

// 토스트 메세지
export const ToastMessage = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  opacity: 0.9;
  animation: fadeInOut 3s;
`;
