import { useEffect, useState } from 'react';
import {
  getCards,
  getCardsByGroup,
  getGroupList,
  getMyCard,
  patchCards,
} from '../../apis';
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

  useEffect(() => {
    fetchCards();
  }, [myCardId, activeBadge]);

  const handleDeleteClick = async () => {
    if (!isDeleteMode) {
      setIsDeleteMode(true);
      setIsEditCompleteVisible(true);
      return;
    }

    if (selectedCards.length === 0) {
      setIsDeleteMode(false);
      setIsEditCompleteVisible(false);
      return;
    }

    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');

    if (!isConfirmed) {
      return;
    }

    try {
      console.log('삭제할 카드 ID 목록:', selectedCards);

      const sortedList = selectedCards.sort((a, b) => a - b);
      await patchCards({ cardList: sortedList });

      setSelectedCards([]);
      setIsDeleteMode(false);
      setIsEditCompleteVisible(false);

      await fetchCards();
      alert('명함이 삭제되었습니다.');
    } catch (error) {
      console.error('카드 삭제에 실패했습니다.', error);
    }
  };

  const handleEditCompleteClick = () => {
    setIsDeleteMode(false);
    setSelectedCards([]);
    setIsEditCompleteVisible(false);
  };

  const handleCardClick = (cardId) => {
    if (isDeleteMode) {
      setSelectedCards((prevSelected) =>
        prevSelected.includes(cardId)
          ? prevSelected.filter((id) => id !== cardId)
          : [...prevSelected, cardId]
      );
    }
  };

  useEffect(() => {
    console.log('선택된 카드 ID 목록:', selectedCards);
  }, [selectedCards]);

  const searchKeyword = localStorage.getItem('searchKeyword');

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
            </S.DeleteCardBadge>
            {isEditCompleteVisible && (
              <S.EditCompletedBadge onClick={handleEditCompleteClick}>
                <S.BadgeText>수정 완료</S.BadgeText>
              </S.EditCompletedBadge>
            )}
          </S.EditBadgeWrapper>
        </S.ButtonContainer>

        <S.CardContainer>
          {displayData.map((data) => (
            <CardInfo
              id={data.id}
              key={data.id}
              name={data.name}
              position={data.position}
              department={data.department}
              company={data.company}
              imageUrl={data.profImgUrl}
              isDeleteMode={isDeleteMode}
              isSelected={selectedCards.includes(data.id)}
              onClick={() => handleCardClick(data.id)}
            />
          ))}
        </S.CardContainer>
      </S.ViewCardPage>
    </>
  );
}
