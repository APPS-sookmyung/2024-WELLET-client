import { useEffect, useState } from 'react';
import { getCards, getCardsByGroup, getGroupList, getMyCard } from '../../apis';
import { BlueBadge, CardInfo, Header, SearchBar } from '../../components';
import Icon from '../../components/Icon/Icon';
import * as S from './ViewCardPage.style';

export default function ViewCardPage() {
  const [myCardId, setMyCardId] = useState(null);
  const [activeBadge, setActiveBadge] = useState({ id: 0, name: '전체 보기' });
  const [isEditCompleteVisible, setIsEditCompleteVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [badges, setBadges] = useState([{ id: 0, name: '전체 보기' }]);
  const [searchData, setSearchData] = useState([]);

  async function fetchMyCard() {
    try {
      const response = await getMyCard();
      setMyCardId(response.data.id);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  async function fetchCards() {
    if (!myCardId) return;
    try {
      const { id } = activeBadge;
      const response =
        id === 0 ? await getCards() : await getCardsByGroup({ categoryId: id });

      const exceptMyCard = response.data.cards.filter(
        (card) => card.id !== myCardId
      );

      setCardsData(exceptMyCard);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  async function fetchGroups() {
    try {
      const response = await getGroupList();
      const groups = response.data.map(({ id, name }) => ({ id, name }));
      setBadges([{ id: 0, name: '전체 보기' }, ...groups]);
    } catch (error) {
      console.error('그룹 리스트를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchMyCard();
    fetchGroups();
  }, []);

  let filteredData =
    activeBadge === '전체 보기'
      ? cardsData
      : cardsData.filter((data) => data.categoryName === activeBadge);

  filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    fetchCards();
  }, [myCardId, activeBadge]);

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

  const searchKeyword = localStorage.getItem('searchKeyword') || '';

  const getDisplayData = () => {
    if (searchKeyword && activeBadge?.id !== 0) {
      return cardsData.filter((card) =>
        searchData.some((searchCard) => searchCard.id === card.id)
      );
    }
    if (!searchKeyword) {
      return cardsData;
    }
    if (activeBadge?.id === 0) {
      return searchData;
    }
    return searchData.filter((data) => data.category === activeBadge?.name);
  };

  const displayData = getDisplayData();

  return (
    <>
      <S.ViewCardPage>
        <Header color='blue' />
        <SearchBar
          theme='white'
          setSearchData={setSearchData}
          myCardId={myCardId}
        />

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
              <Icon id='trash' />
            </S.DeleteCardBadge>
            {isEditCompleteVisible && (
              <S.EditCompletedBadge onClick={handleEditCompleteClick}>
                <S.BadgeText>수정 완료</S.BadgeText>
              </S.EditCompletedBadge>
            )}
          </S.EditBadgeWrapper>
        </S.ButtonContainer>

        <S.CardContainer>
          {displayData.map((data, index) => (
            <CardInfo
              id={data.id}
              key={index}
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
