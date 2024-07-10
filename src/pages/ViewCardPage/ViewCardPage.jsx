import * as S from './ViewCardPage.style';
import {
  Header,
  TabBar,
  SearchBar,
  BlueButton,
  CardInfo,
} from '../../components';
import more from '../../icons/icon-more.svg';
import { useState } from 'react';

const sampleData = [
  {
    name: '박유진',
    job: '프로덕트 디자이너',
    company: '숙명여자대학교',
    imageUrl: 'path/to/profile-image1.jpg',
  },
  {
    name: '한은영',
    job: '프론트엔드 개발자',
    company: '숙명여자대학교',
    imageUrl: 'path/to/profile-image2.jpg',
  },
  {
    name: '이영희',
    job: '백엔드 개발자',
    company: 'WELLET Corp.',
    imageUrl: 'path/to/profile-image3.jpg',
  },
];

export default function ViewCardPage() {
  const [activeButton, setActiveButton] = useState('전체 보기');
  const buttons = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '음식점', value: '음식점' },
  ];

  return (
    <>
      <S.ViewCardPage>
        <Header />
        <SearchBar />

        {/* 그룹 설정 버튼 */}
        <S.ButtonContainer>
          <S.GroupBtnWrapper>
            <BlueButton
              buttons={buttons}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </S.GroupBtnWrapper>
          <S.EditBtnWrapper>
            <S.EditText>그룹 수정</S.EditText>
            <S.MoreIcon>
              <img src={more} alt='더보기' />
            </S.MoreIcon>
          </S.EditBtnWrapper>
        </S.ButtonContainer>

        {/* 명함 */}
        <S.CardContainer>
          {sampleData.map((data, index) => (
            <CardInfo
              key={index}
              name={data.name}
              job={data.job}
              company={data.company}
              imageUrl={data.imageUrl}
            />
          ))}
        </S.CardContainer>
      </S.ViewCardPage>
      <TabBar />
    </>
  );
}
