import * as S from './ImageUploadOverlay.style';

export default function ImageUploadOverlay({ isLoading, children }) {
  return (
    <S.OverlayContainer isLoading={isLoading}>{children}</S.OverlayContainer>
  );
}
