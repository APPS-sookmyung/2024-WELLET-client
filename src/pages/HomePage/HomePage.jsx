import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomePage.style';
import {
  Header,
  SearchBar,
  TabBar,
  CardInfo,
  MyCard,
  Icon,
  AddGroupModal,
} from '../../components';
import MY_CARD_SAMPLE_DATA from '../../constants/myCardSampleData';
import {
  useVisibleCardsEffect,
  useUpdateCardElementsEffect,
  useScrollToCardEffect,
} from '../../utils/HomePageUtils/homePageEffects';
import { scrollCards } from '../../utils/HomePageUtils/homePageUtils';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData.js';

export default function HomePage() {
  const navigate = useNavigate();
  const [filterdList, setFilterdList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMyCardId, setSelectedMyCardId] = useState(0);
  const myCardListRef = useRef(null);
  const cardElementsRef = useRef([]);

  useVisibleCardsEffect(setFilterdList, CARDS_SAMPLE_DATA);
  useUpdateCardElementsEffect(myCardListRef, cardElementsRef);
  useScrollToCardEffect(myCardListRef, cardElementsRef, selectedMyCardId);

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
            <S.LeftAngleBtn
              onClick={() =>
                scrollCards(
                  'prev',
                  selectedMyCardId,
                  setSelectedMyCardId,
                  MY_CARD_SAMPLE_DATA.length
                )
              }
            >
              <Icon id='arrow' width='20' height='20' stroke='#fff' />
            </S.LeftAngleBtn>
            <S.MyCardList ref={myCardListRef}>
              {MY_CARD_SAMPLE_DATA.map((data, index) => (
                <MyCard
                  key={index}
                  backgroundColor={
                    index === selectedMyCardId ? '#fff' : '#A6A4FF'
                  }
                  name={data.name}
                  job={data.job}
                  company={data.company}
                  imageUrl={data.imageUrl}
                  tel={data.tel}
                  email={data.email}
                  address={data.address}
                  onClick={() => navigate('/mypage')}
                />
              ))}
            </S.MyCardList>
            <S.RightAngleBtn
              onClick={() =>
                scrollCards(
                  'next',
                  selectedMyCardId,
                  setSelectedMyCardId,
                  MY_CARD_SAMPLE_DATA.length
                )
              }
            >
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
            <S.AddGroup onClick={() => setIsModalOpen(true)}>
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
      <AddGroupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        style={{ visibility: isModalOpen ? 'visible' : 'hidden' }}
      />
      <TabBar />
    </>
  );
}
