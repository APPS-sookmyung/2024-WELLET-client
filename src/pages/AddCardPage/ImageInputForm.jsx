import * as S from './AddCardPage.style';
import Icon from '../../components/Icon/Icon';

export default function ImageInputForm({
  selectedImage,
  onUploadImage,
  handleButtonClick,
  imageInputRef,
  isDragOver,
  handleDragOver,
  handleDragLeave,
  handleDrop,
}) {
  return (
    <S.DashedBorder
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      isDragOver={isDragOver}
    >
      <S.AddImageContainer onClick={handleButtonClick}>
        <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>
        <S.AddBoxIconWrapper>
          <Icon id='circle-plus' fill='none' />
        </S.AddBoxIconWrapper>
        <S.AddBoxSubTitle>
          아래 버튼을 클릭하거나, <br />
          이미지 파일을 여기에 끌어다 놓으세요.
        </S.AddBoxSubTitle>
        <S.AddBoxDescWrapper>
          <S.AddBoxDesc>
            <Icon id='dot' />
            <S.AddBoxText>
              선택한 모든 명함 이미지는 앞면으로 인식합니다.
            </S.AddBoxText>
          </S.AddBoxDesc>
          <S.AddBoxDesc>
            <Icon id='dot' />
            <S.AddBoxText>
              이미지는 한 번에 2장까지 업로드할 수 있습니다.
            </S.AddBoxText>
          </S.AddBoxDesc>
          <S.AddBoxDesc>
            <Icon id='dot' />
            <S.AddBoxText>이미지 한 장 당 최대 크기는 1MB 입니다.</S.AddBoxText>
          </S.AddBoxDesc>
        </S.AddBoxDescWrapper>
        {selectedImage === null && (
          <S.ImportImageBtnWrapper>
            <S.ImportImageBtn htmlFor='image-file'>
              파일 가져오기
              <input
                id='image-file'
                type='file'
                accept='image/*'
                ref={imageInputRef}
                style={{ display: 'none' }}
                onChange={onUploadImage}
              />
            </S.ImportImageBtn>
          </S.ImportImageBtnWrapper>
        )}
        {selectedImage !== null && (
          <S.PreviewContainer>
            <S.PreviewImage
              src={URL.createObjectURL(selectedImage)}
              alt='preview'
            />
          </S.PreviewContainer>
        )}
      </S.AddImageContainer>
    </S.DashedBorder>
  );
}
