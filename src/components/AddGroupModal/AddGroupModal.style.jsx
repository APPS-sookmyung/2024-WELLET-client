import styled from '@emotion/styled';

export const BackgroundBlur = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 768px;
  position: fixed;
  background-color: #58585880;
  backdrop-filter: blur(10px);
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  transition: opacity 300ms ease;
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 70px;
  width: 100%;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%)
    ${({ isModalOpen }) => (isModalOpen ? 'translateY(0)' : 'translateY(100%)')};
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  transition:
    transform 400ms cubic-bezier(0.86, 0, 0.07, 1),
    opacity 400ms cubic-bezier(0.86, 0, 0.07, 1);
`;

export const AddGroupModal = styled.div`
  width: 100%;
  height: 465px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #e3e3e3;
`;

export const DragBar = styled.div`
  width: 72px;
  height: 5px;
  border-radius: 4px;
  background: var(--grey1, #c8c8c8);
`;

export const ModalTitle = styled.p`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.7px;
`;
export const Center = styled.div`
  padding: 24px 20px 0 20px;
  height: 100%;
`;

export const WarningMsg = styled.p`
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 20px 0 0 2px;
  color: #ff0076;
`;

export const GroupEditBox = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const Bottom = styled.div`
  padding: 0 20px 28px 20px;
  display: flex;
  gap: 20px;
  bottom: 0;
`;
