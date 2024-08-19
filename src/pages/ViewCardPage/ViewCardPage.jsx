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
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';

export default function ViewCardPage() {
  const [activeBadge, setActiveBadge] = useState('전체 보기');
  const [isEditCompleteVisible, setIsEditCompleteVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const badges = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  const filteredData =
    activeBadge === '전체 보기'
      ? CARDS_SAMPLE_DATA
      : CARDS_SAMPLE_DATA.filter((data) => data.category === activeBadge);

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
        <Header color='blue' />
        <SearchBar theme='white' />

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

        {/* 명함 목록 */}
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
