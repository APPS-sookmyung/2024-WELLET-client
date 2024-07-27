import * as S from './HomePage.style';
import { Header, SearchBar, TabBar, CardInfo } from '../../components';
import Icon from '../../components/Icon/Icon';
import sampleData from '../../constants/cardData';
import { useState, useEffect } from 'react';
export default function HomePage() {
  const [filterdList, setFilterdList] = useState();

  const visibleCards = () => {
    const availableHeight = window.innerHeight - 348 - 100 - 70;
    const availableCardCount = Math.floor(availableHeight / 90);
    setFilterdList(sampleData.slice(0, availableCardCount));
  };

  useEffect(() => {
    visibleCards();
  }, []);

  return (
    <>
      <S.HomePage>
        <S.Top>
          <Header fill='#fff' />
          <SearchBar theme='blue' />
          <S.CardListTitle>
            <p>내 명함</p>
            <p>나의 명함 확인 및 관리하기</p>
          </S.CardListTitle>
          <S.MyCard>
            <S.ProfileImg></S.ProfileImg>
            <S.ProfileText>
              <S.Name>김은지</S.Name>
              <S.Team>WELLET Corp.</S.Team>
              <S.ExtraInfo>
                <p>TEL</p>
                <p>+82-10-1234-5678</p>
              </S.ExtraInfo>
              <S.ExtraInfo>
                <p>EMAIL</p>
                <p>email@welletapp.co.kr</p>
              </S.ExtraInfo>
              <S.ExtraInfo>
                <p>ADRESS</p>
                <p>서울시 강남구 테헤란로 134 </p>
              </S.ExtraInfo>
            </S.ProfileText>
            <S.MoreOption>
              <Icon id='dot3' fill='#2D29FF' />
            </S.MoreOption>
          </S.MyCard>
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
          {filterdList ? (
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
          ) : null}
        </S.Container>
      </S.HomePage>
      <TabBar />
    </>
  );
}
