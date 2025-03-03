import { useState, useRef } from 'react';
import * as S from './AddCardPage.style';
import Icon from '../../components/Icon/Icon';

const UPLOAD_GUIDELINES = [
  '이미지는 1장만 업로드할 수 있습니다.',
  '업로드 가능한 최대 크기는 1MB 입니다.',
];

export default function ImageInputForm({ selectedImage, onUploadImage }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const imageInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > 1024 * 1024) {
      alert('업로드 가능한 최대 크기는 1MB입니다.');
      return;
    }

    onUploadImage({ target: { files: [file] } });
  };

  const handleFileChange = (event) => {
    if (event.target.files.length === 0) return;

    const file = event.target.files[0];
    handleFileUpload(file);

    event.target.value = '';
  };

  return (
    <S.DashedBorder
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      isDragOver={isDragOver}
    >
      <S.AddImageContainer>
        <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>
        <S.AddBoxIconWrapper>
          <Icon id='circle-plus' fill='none' />
        </S.AddBoxIconWrapper>
        <S.AddBoxSubTitle>
          아래 버튼을 클릭하거나, <br />
          이미지 파일을 여기에 끌어다 놓으세요.
        </S.AddBoxSubTitle>
        <S.AddBoxDescWrapper>
          {UPLOAD_GUIDELINES.map((guideline, index) => (
            <S.AddBoxDesc key={index}>
              <Icon id='dot' />
              <S.AddBoxText>{guideline}</S.AddBoxText>
            </S.AddBoxDesc>
          ))}
        </S.AddBoxDescWrapper>
        {!selectedImage && (
          <S.ImportImageBtnWrapper>
            <S.ImportImageBtn htmlFor='image-file'>
              파일 가져오기
              <input
                id='image-file'
                type='file'
                accept='image/*'
                ref={imageInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </S.ImportImageBtn>
          </S.ImportImageBtnWrapper>
        )}
        {selectedImage && (
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
