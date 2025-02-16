import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCards } from '../../apis/cards.js';
import { getMyCard } from '../../apis/myCard.js';
import { CardInfo, Header, MyCard, SearchBar } from '../../components';
import * as S from './HomePage.style';

export default function HomePage() {
  const navigate = useNavigate();
  // const [filterdList, setFilterdList] = useState([]);
  const [myCardData, setMyCardData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [myCardId, setMyCardId] = useState(null);
  // useVisibleCardsEffect(setFilterdList, cardsData);

  async function fetchMyCard() {
    try {
      const response = await getMyCard();
      setMyCardData(response.data);
      setMyCardId(response.data.id);
    } catch (error) {
      console.error('내 카드 정보를 불러오지 못했습니다.', error);
    }
  }

  async function fetchCards() {
    if (!myCardId) return;
    try {
      const response = await getCards();
      const exceptMyCard = response.data.cards.filter(
        (card) => card.id !== myCardId
      );
      setCardsData(exceptMyCard);
    } catch (error) {
      console.error('카드 리스트를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchMyCard();
  }, []);

  useEffect(() => {
    if (myCardData) {
      fetchCards();
    }
  }, [myCardData]);

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
              department={myCardData.department}
              position={myCardData.position}
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
              <div key={index}>
                <CardInfo
                  id={data.id}
                  name={data.name}
                  position={data.position}
                  department={data.department}
                  imageUrl={data.imageUrl}
                />
              </div>
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
