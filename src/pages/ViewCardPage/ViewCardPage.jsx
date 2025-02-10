import { useEffect, useState } from 'react';
import { getCards, postCards } from '../../apis/cards';
import { getGroupList, postGroup } from '../../apis/group';
import { BlueBadge, CardInfo, Header, SearchBar } from '../../components';
import Icon from '../../components/Icon/Icon';
import * as S from './ViewCardPage.style';

export default function ViewCardPage() {
  const [activeBadge, setActiveBadge] = useState('전체 보기'); // 기본값
  const [isEditCompleteVisible, setIsEditCompleteVisible] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const [badges, setBadges] = useState([
    { label: '전체 보기', value: '전체 보기' }, // 기본 그룹 추가
  ]);

  async function fetchCards() {
    try {
      const response = await getCards();
      setCardsData(response.data.cards);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  async function fetchGroups() {
    try {
      const response = await getGroupList();
      const groups = response.data.map((group) => ({
        label: group.id, // 🔹 label에 id 설정
        value: group.name, // 🔹 value에 name 설정
      }));
      setGroupData(response.data);
      setBadges((prev) => [{ label: '전체 보기', value: '전체 보기' }, ...groups]);
    } catch (error) {
      console.error('그룹 리스트를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchCards();
    fetchGroups();
  }, []);

  let filteredData =
    activeBadge === '전체 보기'
      ? cardsData
      : cardsData.filter((data) => data.categoryName === activeBadge); // 🔹 그룹 이름과 비교하도록 변경

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
        <Header color="blue" />
        <SearchBar theme="white" />

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
              <Icon id="trash" />
            </S.DeleteCardBadge>
            {isEditCompleteVisible && (
              <S.EditCompletedBadge onClick={handleEditCompleteClick}>
                <S.BadgeText>수정 완료</S.BadgeText>
              </S.EditCompletedBadge>
            )}
          </S.EditBadgeWrapper>
        </S.ButtonContainer>

        <S.CardContainer>
          {filteredData.map((data, index) => (
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
