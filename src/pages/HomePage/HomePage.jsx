import * as S from './HomePage.style';
import { Header, SearchBar, TabBar, CardInfo, MyCard } from '../../components';
import Icon from '../../components/Icon/Icon';
import myCardData from '../../constants/myCardData';
import sampleData from '../../constants/cardData.js';
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const [filterdList, setFilterdList] = useState([]);
  const [selectedMyCard, setSelectedMyCard] = useState(0);
  const myCardListRef = useRef(null);
  const cardElementsRef = useRef([]);

  const visibleCards = () => {
    const availableHeight = window.innerHeight - 348 - 100 - 70;
    const availableCardCount = Math.floor(availableHeight / 90);
    setFilterdList(sampleData.slice(0, availableCardCount));
  };

  useEffect(() => {
    visibleCards();
  }, []);

  useEffect(() => {
    const updateCardElements = () => {
      if (myCardListRef.current) {
        cardElementsRef.current = Array.from(
          myCardListRef.current.querySelectorAll('div')
        );
      }
    };

    updateCardElements();
    window.addEventListener('resize', updateCardElements);
    return () => {
      window.removeEventListener('resize', updateCardElements);
    };
  }, []);

  useEffect(() => {
    if (myCardListRef.current && cardElementsRef.current.length > 0) {
      const containerWidth = myCardListRef.current.clientWidth;
      const cardWidth = cardElementsRef.current[0].offsetWidth;
      const cardGap = 10;
      const padding = 20; // Padding value to include

      // Calculate the center position of the selected card
      const cardCenterPosition =
        (cardWidth + cardGap) * selectedMyCard + cardWidth / 2;

      // Calculate the center position of the container including padding
      const containerCenterPosition = containerWidth / 2 - padding;

      // Calculate the new scroll position to center the selected card
      const newScrollPosition = cardCenterPosition - containerCenterPosition;

      // Ensure the new scroll position is within bounds
      myCardListRef.current.scrollTo({
        left: Math.max(
          0,
          Math.min(
            newScrollPosition,
            myCardListRef.current.scrollWidth - containerWidth
          )
        ),
        behavior: 'smooth',
      });
    }
  }, [selectedMyCard]);

  const scrollCards = (direction) => {
    if (direction === 'next' && selectedMyCard < myCardData.length - 1) {
      setSelectedMyCard((prev) => prev + 1);
    } else if (direction === 'prev' && selectedMyCard > 0) {
      setSelectedMyCard((prev) => prev - 1);
    }
  };

  return (
    <>
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
          <S.MyCardListContainer>
            <S.LeftAngleBtn onClick={() => scrollCards('prev')}>
              <Icon id='arrow' width='20' height='20' stroke='#fff' />
            </S.LeftAngleBtn>
            <S.MyCardList ref={myCardListRef}>
              {myCardData.map((data, index) => (
                <MyCard
                  key={index}
                  name={data.name}
                  job={data.job}
                  company={data.company}
                  imageUrl={data.imageUrl}
                  tel={data.tel}
                  email={data.email}
                  address={data.address}
                />
              ))}
            </S.MyCardList>
            <S.RightAngleBtn onClick={() => scrollCards('next')}>
              <Icon id='arrow-right' width='20' height='20' stroke='#fff' />
            </S.RightAngleBtn>
          </S.MyCardListContainer>

          <S.UpDownBarBox>
            <S.UpDownBar />
          </S.UpDownBarBox>
        </S.Top>
        <S.Container>
          <S.CardListTitle>
            <p style={{ color: '#000' }}>둘러보기</p>
            <p style={{ color: '#555' }}>등록된 명함 찾아보기</p>
          </S.CardListTitle>
          <S.ListOpiton>
            <S.ArrowBottomIcon>
              <Icon id='arrow-bottom' />
            </S.ArrowBottomIcon>
            <S.Filter>최근 등록 순</S.Filter>
            <S.AddGroup>
              <S.EditBtnWrapper>
                <S.EditText>그룹 수정</S.EditText>
                <S.MoreIcon>
                  <Icon id='more' fill='#2D29FF' />
                </S.MoreIcon>
              </S.EditBtnWrapper>
            </S.AddGroup>
          </S.ListOpiton>
          {filterdList.length > 0 && (
            <>
              <S.CardContainer>
                {filterdList.map((data, index) => (
                  <CardInfo
                    key={index}
                    name={data.name}
                    job={data.job}
                    company={data.company}
                    imageUrl={data.imageUrl}
                  />
                ))}
              </S.CardContainer>
              <S.BottomMoreBtn>
                <S.EditBtnWrapper>
                  <S.EditText>더 보기</S.EditText>
                </S.EditBtnWrapper>
              </S.BottomMoreBtn>
            </>
          )}
        </S.Container>
      </S.HomePage>
      <TabBar />
    </>
  );
}
