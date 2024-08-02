import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Arrowicon = styled.div`
  width: 10px;
  height: 9px;
  display: flex;
  align-items: center;
`;

export const Welletlogo = styled.div`
  width: 78px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIcon = styled.div`
  padding: 4px 10px;-
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
`;

export const Body = styled.div`
  width: calc(100% - 39px);
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

export const Galleryicon = styled.div`
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
`;

export const EditInfoContainer = styled.div`
  width: 200px;
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

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
