import styled from '@emotion/styled';

export const Header = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const arrowicon = styled.div`
  width: 10px;
  height: 9px;
  display: flex;
  align-items: center;
`;

export const welletlogo = styled.div`
  width: 78px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditIcon = styled.div`
  display: inline-flex;
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

export const EditInfoContainer = styled.div`
  width: 200px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;
export const EditName = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const EditInfo = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  display: flex;
`;

export const EditCompany = styled.div`
  color: var(--grey1, #c8c8c8);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const arrowdownicon = styled.div`
  fill: var(--white, #fff);
  stroke-width: 0.8px;
  stroke: var(--grey4, #1a1a1a);
`;
export const EditBox = styled.div`
  width: 690px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const EditContact = styled.div`
  color: var(--grey2, #949494);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 5px;
`;

export const InputValue = styled.div`
  color: var(--grey3, #555);
  font-size: 11px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
  width: 690px;
`;

export const pencilicon = styled.div`
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  opacity: 0.5;
`;

export const galleryicon = styled.div`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  position: absolute;
`;
