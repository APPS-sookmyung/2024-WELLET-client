import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const WelletLogo = styled.div`
  width: 78px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled.div`
  padding: 4px 10px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 9px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  margin-left: 39px;
`;

export const PicContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 68.239px;
  background: #2d29ff4c;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const GalleryIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: absolute;
  bottom: 27px;
  right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditGuide = styled.div`
  color: var(--grey2, #949494);
  font-size: 11px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 0px 4px;
`;

export const EditInfoContainer = styled.div`
  width: 70%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const Name = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 2px 4px;
`;

export const EditName = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
`;

export const PencilIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
`;

export const EditInfo = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  display: flex;
`;

export const InputContainer = styled.div`
  width: 90%;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputLabel = styled.label`
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  width: 100%;
  height: 41px;
  border-radius: 10px;
  background: #f4f4f9;
  gap: 6px;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: var(--grey2, #949494);
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.7px;
  outline: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 13px;
  height: 13px;
`;
