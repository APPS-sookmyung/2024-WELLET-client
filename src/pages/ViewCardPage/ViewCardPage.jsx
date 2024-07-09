import * as S from './ViewCardPage.style';

export default function ViewCardPage() {
  return (
    <S.ViewCardPage>
      <S.SearchBar></S.SearchBar>

      <S.ButtonContainer>
        <S.CategoryBtnWrapper>
          <S.CategoryBtn>전체보기</S.CategoryBtn>
          <S.CategoryBtn>비즈니스</S.CategoryBtn>
          <S.CategoryBtn>음식점</S.CategoryBtn>
        </S.CategoryBtnWrapper>
        <S.EditBtn>그룹 수정</S.EditBtn>
      </S.ButtonContainer>

      <S.CardContainer>
        <S.Card>
          <S.ImgWrapper></S.ImgWrapper>
          <S.Info>
            <S.Name>박유진</S.Name>
            <S.Job>프론트엔드 개발자, 숙명여자대학교</S.Job>
          </S.Info>
        </S.Card>
      </S.CardContainer>
    </S.ViewCardPage>
  );
}
