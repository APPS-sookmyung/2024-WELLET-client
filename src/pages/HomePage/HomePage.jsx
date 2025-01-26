import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomePage.style';
import { Header, SearchBar, CardInfo, MyCard } from '../../components';
import { useVisibleCardsEffect } from '../../utils/HomePageUtils/homePageEffects';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData.js';
import { getMyCard } from '../../apis/myCard.js';
import { getCards } from '../../apis/cards.js';

export default function HomePage() {
  const navigate = useNavigate();
  const [filterdList, setFilterdList] = useState([]);
  const [myCardData, setMyCardData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  // useVisibleCardsEffect(setFilterdList, cardsData);

  async function fetchMyCard() {
    try {
      const response = await getMyCard();
      setMyCardData(response.data);
    } catch (error) {
      console.error('내 카드 정보를 불러오지 못했습니다.', error);
    }
  }

  async function fetchCards() {
    try {
      const response = await getCards();
      const filteredCards = cards.filter((card) => card.id !== myCardData.id);
      setCardsData(response.data.cards);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchMyCard();
    fetchCards();
  }, []);

  return (
    <S.HomePage>
      <S.Top>
        <S.Padding>
          <Header color='white' />
          <SearchBar theme='blue' />
          <S.CardListTitle>
            <p>내 명함</p>
            <p>나의 명함 확인 및 관리하기</p>
          </S.CardListTitle>
        </S.Padding>
        {myCardData && Object.keys(myCardData).length > 0 ? (
          <S.MyCardContainer>
            <MyCard
              backgroundColor='#fff'
              name={myCardData.name}
              role={myCardData.role}
              company={myCardData.company}
              imageUrl={myCardData.imageUrl}
              phone={myCardData.phone}
              tel={myCardData.tel}
              email={myCardData.email}
              address={myCardData.address}
              onClick={() => navigate('/mypage')}
            />
          </S.MyCardContainer>
        ) : (
          <S.MyCardContainer>
            <S.EmptyMyCard onClick={() => navigate('/mypage')}>
              <p>아직 등록된 내 명함이 없어요!</p>
              <p>내 명함 등록하러 가기</p>
            </S.EmptyMyCard>
          </S.MyCardContainer>
        )}
        <S.UpDownBarBox>
          <S.UpDownBar />
        </S.UpDownBarBox>
      </S.Top>
      <S.Container>
        <S.CardListTitle>
          <p style={{ color: '#000' }}>둘러보기</p>
          <p style={{ color: '#555' }}>최근 등록된 명함</p>
        </S.CardListTitle>
        {cardsData && cardsData.length > 0 && (
          <S.CardContainer>
            {cardsData.map((data, index) => (
              <CardInfo
                key={index}
                id={data.id}
                name={data.name}
                position={data.position}
                department={data.department}
                imageUrl={data.imageUrl}
              />
            ))}
          </S.CardContainer>
        )}
      </S.Container>
      <S.BottomMoreBtn>
        <S.EditBtnWrapper onClick={() => navigate('/card')}>
          <S.EditBtn>
            <S.EditText>더 보기</S.EditText>
          </S.EditBtn>
        </S.EditBtnWrapper>
      </S.BottomMoreBtn>
    </S.HomePage>
  );
}
