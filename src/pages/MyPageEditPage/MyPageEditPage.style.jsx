import styled from '@emotion/styled';

export const MyEdit = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 96px;
`;

export const Header = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  cursor: pointer;
`;

export const WelletLogo = styled.div`
  width: 78px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIconBox = styled.div`
  display: flex;
  justify-content: end;
`;

export const EditIcon = styled.button`
  padding: 4px 10px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PicContainer = styled.div`
  width: 68px;
  height: 68px;
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
  border-radius: 68px;
  background: ${({ profileImgUrl }) =>
    profileImgUrl ? `url(${profileImgUrl})` : '#2d29ff4c'};
  background-size: cover;
  background-position: center;
`;

export const GalleryIcon = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditGuide = styled.div`
  color: var(--grey2, #949494);
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 0px 0;
  word-break: keep-all;
`;

export const EditInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputNameBox = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--grey2, #949494);
  font-size: 16px;
  font-weight: 600;
`;

export const Name = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding: 2px 5px 2px 0;
`;

export const EditName = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
`;

export const PencilIcon = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 0 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px 0;
`;

export const InputLabel = styled.label`
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 14px;
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
  color: var(--grey4, #1a1a1a);
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
