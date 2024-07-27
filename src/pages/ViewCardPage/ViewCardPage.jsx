import * as S from './ViewCardPage.style';
import {
  Header,
  TabBar,
  SearchBar,
  BlueBadge,
  CardInfo,
} from '../../components';
import { useState } from 'react';
import Icon from '../../components/Icon/Icon';

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
  const [activeBadge, setActiveBadge] = useState('전체 보기');
  const [isEditCompleteVisible, setIsEditCompleteVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const badges = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '음식점', value: '음식점' },
  ];

  const filteredData =
    activeBadge === '전체 보기'
      ? sampleData
      : sampleData.filter((data) => data.category === activeBadge);

  const handleDeleteClick = () => {
    setIsDeleteMode(true);
    setIsEditCompleteVisible(true);
  };

  const handleEditCompleteClick = () => {
    setIsDeleteMode(false);
    setSelectedCards([]);
    setIsEditCompleteVisible(false);
  };

  const handleCardClick = (index) => {
    if (isDeleteMode) {
      setSelectedCards((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((i) => i !== index);
        } else {
          return [...prevSelected, index];
        }
      });
    }
  };

  return (
    <>
      <S.ViewCardPage>
        <Header />
        <SearchBar />

        {/* 그룹 설정 버튼 */}
        <S.ButtonContainer>
          <S.GroupBadgeWrapper>
            <BlueBadge
              badges={badges}
              activeBadge={activeBadge}
              setActiveBadge={setActiveBadge}
            />
          </S.GroupBadgeWrapper>
          <S.EditBadgeWrapper>
            <S.DeleteCardBadge onClick={handleDeleteClick}>
              <S.BadgeText>명함 삭제</S.BadgeText>
              <S.TrashIcon>
                <Icon id='trash' fill='none' />
              </S.TrashIcon>
            </S.DeleteCardBadge>
            {isEditCompleteVisible && (
              <S.EditCompletedBadge onClick={handleEditCompleteClick}>
                <S.BadgeText>수정 완료</S.BadgeText>
              </S.EditCompletedBadge>
            )}
          </S.EditBadgeWrapper>
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
              isDeleteMode={isDeleteMode}
              isSelected={selectedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </S.CardContainer>
      </S.ViewCardPage>
      <TabBar />
    </>
  );
}
