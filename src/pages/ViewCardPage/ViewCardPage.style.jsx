import styled from '@emotion/styled';

export const ViewCardPage = styled.div`
  padding: 0 20px 100px 20px;
`;

// 버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const GroupBadgeWrapper = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
`;

export const EditBadgeWrapper = styled.div`
  display: flex;
  gap: 5px;
  white-space: nowrap;
  padding-left: 6px;
`;

export const DeleteCardBadge = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 8px;
  border-radius: 10px;
  background: var(--Color-4-1, #ffe6f2);

  svg {
    width: 10px;
    height: 11px;
  }
`;

export const EditCompletedBadge = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 8px;
  border-radius: 10px;
  background: var(--Color-4-1, #ffe6f2);
`;

export const BadgeText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0076;
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
`;

// 명함
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
