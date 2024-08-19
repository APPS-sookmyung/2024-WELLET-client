import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  border-radius: 10px;
  background: ${(props) =>
    props.isSelected ? 'var(--primary, #2D29FF)' : '#f4f4f9'};
  padding: 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ProfileImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
`;

export const Name = styled.h1`
  color: ${(props) =>
    props.isSelected ? 'var(--white, #FFF)' : 'var(--grey3, #555)'};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.7px;
`;

export const Job = styled.span`
  color: ${(props) =>
    props.isSelected ? 'var(--white, #FFF)' : 'var(--grey3, #555)'};
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 9px;
`;
