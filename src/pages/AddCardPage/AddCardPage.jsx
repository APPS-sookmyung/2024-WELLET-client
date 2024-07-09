import * as S from './AddCardPage.style';
import magnifyingGlassIcon from '../../icons/icon-magnifying-glass.svg';
import more from '../../icons/icon-more.svg';
import arrowRight from '../../icons/icon-arrow-right.svg';

export default function AddCardPage() {
  return (
    <S.AddCardPage>
      <S.SearchBar>
        <S.SearchIcon>
          <img src={magnifyingGlassIcon} alt='돋보기' />
        </S.SearchIcon>
        <S.SearchInput placeholder='명함을 검색해주세요' />
      </S.SearchBar>

      <S.TitleContainer>
        <S.Title>명함 추가하기</S.Title>
        <S.Subtitle>사진을 첨부하거나 직접 입력하여 명함 추가하기</S.Subtitle>
      </S.TitleContainer>
    </S.AddCardPage>
  );
}
