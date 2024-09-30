import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomePage.style';
import {
  Header,
  SearchBar,
  CardInfo,
  MyCard,
  AddGroupModal,
} from '../../components';
import MY_CARD_SAMPLE_DATA from '../../constants/myCardSampleData';
import { useVisibleCardsEffect } from '../../utils/HomePageUtils/homePageEffects';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData.js';
import { getMyCard } from '../../apis/myCard.js';

export default function HomePage() {
  const navigate = useNavigate();
  const [filterdList, setFilterdList] = useState([]);
  useVisibleCardsEffect(setFilterdList, CARDS_SAMPLE_DATA);

  const myCardData = getMyCard({ member_id: 5 });
  console.log('myCardData: ', myCardData);

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
        <S.MyCardContainer>
          <MyCard
            backgroundColor='#fff'
            name={MY_CARD_SAMPLE_DATA.name}
            job={MY_CARD_SAMPLE_DATA.job}
            company={MY_CARD_SAMPLE_DATA.company}
            imageUrl={MY_CARD_SAMPLE_DATA.imageUrl}
            tel={MY_CARD_SAMPLE_DATA.tel}
            email={MY_CARD_SAMPLE_DATA.email}
            address={MY_CARD_SAMPLE_DATA.address}
            onClick={() => navigate('/mypage')}
          />
        </S.MyCardContainer>
        <S.UpDownBarBox>
          <S.UpDownBar />
        </S.UpDownBarBox>
      </S.Top>
      <S.Container>
        <S.CardListTitle>
          <p style={{ color: '#000' }}>둘러보기</p>
          <p style={{ color: '#555' }}>최근 등록된 명함</p>
        </S.CardListTitle>
        {filterdList.length > 0 && (
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
