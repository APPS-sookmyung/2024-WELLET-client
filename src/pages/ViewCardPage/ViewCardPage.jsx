import * as S from './ViewCardPage.style';
import { Header, SearchBar, BlueBadge, CardInfo } from '../../components';
import { useEffect, useState } from 'react';
import Icon from '../../components/Icon/Icon';
import { getCards } from '../../apis/cards';

export default function ViewCardPage() {
  const [activeBadge, setActiveBadge] = useState('전체 보기');
  const [isEditCompleteVisible, setIsEditCompleteVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const badges = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  async function fetchCards() {
    try {
      const response = await getCards();
      setCardsData(response.data.cards);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  let filteredData =
    activeBadge === '전체 보기'
      ? cardsData
      : cardsData.filter((data) => data.category === activeBadge);

  // 이름을 기준으로 오름차순 정렬
  filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

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
              <Icon id='trash' />
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
              id={data.id}
              key={index}
              id={data.id}
              name={data.name}
              position={data.position}
              department={data.department}
              company={data.company}
              imageUrl={data.imageUrl}
              isDeleteMode={isDeleteMode}
              isSelected={selectedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </S.CardContainer>
      </S.ViewCardPage>
    </>
  );
}
