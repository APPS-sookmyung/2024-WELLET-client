import styled from '@emotion/styled';

export const DetailEdit = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  padding-bottom: 85px;
`;

export const Header = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Arrowicon = styled.button`
  width: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Welletlogo = styled.div`
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
  background: #ffffff;
`;

export const Galleryicon = styled.button`
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
  font-size: 11px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.55px;
  padding: 0px 0;
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
  font-size: 20px;
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

export const EditInfo = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  display: flex;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 0 20px;
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
  color: #000;
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

export const GroupButtonContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const GroupButtonBar = styled.div`
  width: 100%;
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const GroupButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px 0;
  width: 100%;
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

export const AddGroupButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 9px 4px 9px;
  gap: 4px;
  white-space: nowrap;

  color: var(--primary, #2d29ff);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.55px;

  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
`;

export const PlusBtnWrapper = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: #ebf3fe;
  font-size: 9px;
`;

export const PlusText = styled.p`
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
  font-weight: 400;
  color: #2d29ff;
`;

export const MoreIcon = styled.div`
  width: 10px;
  height: 11px;
  display: flex;
`;

export const CardImageContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 4px 16px;
  width: 100%;
  justify-content: baseline;
`;

export const CardImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const CardAddImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 2px;
  padding: 0 16px 30px 16px;
  width: 100%;
`;

export const AddCardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  background-color: #f4f4f9;
  cursor: pointer;
`;

export const CardGalleryIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 부모의 정중앙으로 이동 */
  width: 40px; /* 아이콘 크기 */
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
`;
