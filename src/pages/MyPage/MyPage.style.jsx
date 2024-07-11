import styled from '@emotion/styled';

export const Container1 = styled.div`
  width: 728px;
  height: 99.049px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f9;
`;

export const Container2 = styled.div`
  width: 728px;
  height: 185.979px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f9;
`;

export const Mybar1 = styled.div`
  width: 100%;
  height: 244px;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(111deg, #2d29ff 35.96%, #721cff 116.82%);
  position: relative;
  padding: 20px;
`;

export const Mybar2 = styled.div`
  width: 100%;
  height: 724px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

export const barbox1 = styled.div`
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
  text-align: center;
  position: absolute;
  top: 30px; 
  left: 50%;
  transform: translateX(-50%); 
`;

export const barbox2 = styled.div`
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; 
  letter-spacing: -0.5px;
  text-align: center;
  position: absolute; 
  top: 190px; 
  left: 50%; 
  transform: translateX(-50%); 
`;

export const subbar = styled.div`
  width: 71.766px;
  height: 4.664px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #8776ff;
  position: absolute; /* 위치를 절대값으로 변경 */
  top: 230px; /* 위에서부터 230px */
  left: 50%; /* 가운데 정렬 */
  transform: translateX(-50%); /* 가운데 정렬 */
`;

export const EditIcon = styled.div`
  display: inline-flex;
  padding: 4px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 13.5px */
  letter-spacing: -0.5px;
  position: absolute; /* 위치를 절대값으로 변경 */
  top: 20px; /* 위에서부터 20px */
  right: 20px; /* 오른쪽에서 20px */
  height: 24px; /* barbox와 동일한 높이 */
`;

export const ProfilePic = styled.img`
  width: 97px;
  height: 97px;
  flex-shrink: 0;
  border-radius: 97px;
  position: absolute;
  top: 83px; /* 위에서부터 83px */
  left: 50%; /* 가운데 정렬 */
  transform: translateX(-50%); /* 가운데 정렬 */
`;

export const Infobar = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.5px;
`;

export const Font1 = styled.div`
  color: var(--grey2, #949494);
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 13.5px */
  letter-spacing: -0.5px;
`;

export const Font2 = styled.div`
  color: var(--grey4, #1a1a1a);
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
  letter-spacing: -0.5px;
`;

export const IconBarContainer = styled.div`
  position: absolute;
  top: 84px;
  right: 20px;
  display: flex;
  gap: 16px;
  padding: 2px;
`;

export const messageIcon = styled.img`
  width: 15.831px;
  height: 14.392px;
  position: absolute; /* 위치를 절대값으로 변경 */
  top: 466px; /* 위에서부터 466px */
  right: 70px;
`;

export const callIcon = styled.img`
  width: 16px;
  height: 18px;
  position: absolute;
  top: 466px; 
  right: 50px;
`;

export const mailIcon = styled.img`
  width: 18px;
  height: 13px;
  position: absolute;
  top: 466px; /* 여기에 적절한 위치 값을 설정하세요 */
  right: 30px;
`;

export const shareicon = styled.img`
  width: 11.373px;
  height: 17.234px;
  flex-shrink: 0;
  fill: #fff;
`;

export const galleryicon = styled.img`
  width: 18.172px;
  height: 18.172px;
  flex-shrink: 0;
`;

export const dot3icon = styled.img`
  width: 2.4px;
  height: 10.453px;
  flex-shrink: 0;
`;