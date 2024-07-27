import styled from '@emotion/styled';

export const AddCardPage = styled.div`
  padding: 20px;
`;

// 타이틀
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 0 8px;
`;

export const Title = styled.h1`
  color: var(--grey4, #1a1a1a);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: var(--grey3, #555);
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
`;

// 버튼
export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 5px;
`;

// 점선 테두리
export const DashedBorder = styled.div`
  border-radius: 20px;
  border: 0.5px dashed #2d29ff;
  padding: 20px;
`;

// 이미지 입력으로 명함 추가
export const AddBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddBoxTitle = styled.h3`
  margin: 6px 0 13px;
  color: var(--primary, #2d29ff);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.7px;
`;

export const AddBoxIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const AddBoxSubTitle = styled.p`
  padding: 10px 0 16px;
  color: var(--grey2, #949494);
  text-align: center;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const AddBoxDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 6px;
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
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ImportFileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 14px 4px 14px;
`;

export const ImportFileBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 8px;
  border-radius: 10px;
  background: var(--primary, #2d29ff);
  color: var(--white, #fff);
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.5px;
`;

// 직접 입력으로 명함 추가
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RegisterImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 12px;
`;

export const SelectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 68.239px;
  background: #2d29ff4c;

  img {
    width: 18px;
    height: 18px;
  }
`;

export const RegisterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const RegisterTitle = styled.h3`
  color: var(--grey3, #555);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.7px;
`;

export const RegisterSubTitle = styled.p`
  display: flex;
  color: var(--grey2, #949494);
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// 그룹 버튼
export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 2px;
`;

export const InputLabel = styled.label`
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const GroupButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

// 등록, 취소 버튼
export const ActionBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 16px 0 100px;
`;
