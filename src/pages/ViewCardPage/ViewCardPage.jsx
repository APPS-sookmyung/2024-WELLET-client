import * as S from './ViewCardPage.style';
import {
  Header,
  TabBar,
  SearchBar,
  BlueBadge,
  CardInfo,
} from '../../components';
import more from '../../icons/icon-more.svg';
import { useState } from 'react';

const sampleData = [
  {
    name: '박유진',
    job: '프로덕트 디자이너',
    company: '숙명여자대학교',
    imageUrl: '',
    category: '비즈니스',
  },
  {
    name: '한은영',
    job: '프론트엔드 개발자',
    company: '숙명여자대학교',
    imageUrl: '',
    category: '비즈니스',
  },
  {
    name: '이영희',
    job: '백엔드 개발자',
    company: 'WELLET Corp.',
    imageUrl: '',
    category: '비즈니스',
  },
  {
    name: '순희네보리밥',
    job: '',
    company: '',
    imageUrl: '',
    category: '음식점',
  },
  {
    name: '곱분이곱창',
    job: '',
    company: '',
    imageUrl: '',
    category: '음식점',
  },
];

export default function ViewCardPage() {
  const [activeButton, setActiveButton] = useState('전체 보기');
  const buttons = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '음식점', value: '음식점' },
  ];

  const filteredData =
    activeButton === '전체 보기'
      ? sampleData
      : sampleData.filter((data) => data.category === activeButton);

  return (
    <>
      <S.ViewCardPage>
        <Header />
        <SearchBar />

        {/* 그룹 설정 버튼 */}
        <S.ButtonContainer>
          <S.GroupBtnWrapper>
            <BlueBadge
              buttons={buttons}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </S.GroupBtnWrapper>
          <S.EditBtnWrapper>
            <S.EditText>명함 삭제</S.EditText>
            <S.TrashIcon></S.TrashIcon>
          </S.EditBtnWrapper>
        </S.ButtonContainer>

        {/* 명함 */}
        <S.CardContainer>
          {filteredData.map((data, index) => (
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
