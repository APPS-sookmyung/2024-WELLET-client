import styled from '@emotion/styled';

export const AddCardPage = styled.div`
  padding: 20px;
`;

// 타이틀
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
`;

export const Title = styled.h1`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: var(--grey3, #555);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

// 버튼
export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 4px;
`;

// 명함 추가
export const AddBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 256px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0.5px dashed #2d29ff;
  padding: 26px;
`;

export const AddBoxTitle = styled.h3`
  margin-bottom: 16px;
  color: var(--primary, #2d29ff);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const AddBoxIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const AddBoxSubTitle = styled.p`
  padding: 10px 0;
  color: var(--grey2, #949494);
  text-align: center;
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const AddBoxDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
`;

export const AddBoxDesc = styled.div`
  display: flex;
  gap: 5px;
`;

export const DotIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddBoxText = styled.p`
  color: var(--grey2, #949494);
  text-align: center;
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ImportFileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px 0;
`;

export const ImportFileBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 77px;
  padding: 4px 8px;
  gap: 8px;
  border-radius: 10px;
  background: var(--primary, #2d29ff);
  color: var(--white, #fff);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

// 등록, 취소 버튼
export const ActionBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
`;
