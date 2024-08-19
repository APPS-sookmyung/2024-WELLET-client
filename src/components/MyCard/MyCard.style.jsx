import styled from '@emotion/styled';

export const MyCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  height: 155px;
  width: 100%;
  transition: background 0.3s;
`;

export const ProfileImg = styled.div`
  min-width: 68px;
  min-height: 68px;
  max-width: 68px;
  max-height: 68px;
  border-radius: 50%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileText = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 3px 0;
  color: #1a1a1a;
`;

export const Team = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 11px;
  color: #1a1a1a;
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 0;
  color: #555;

  p:nth-of-type(1) {
    font-size: 11px;
    font-weight: 500;
  }

  p:nth-of-type(2) {
    font-size: 11px;
    font-weight: 400;
  }
`;

export const MoreOption = styled.div`
  display: flex;
  margin-top: 12px;

  justify-content: end;
  margin-left: auto;
`;
