import React from 'react';
import * as S from './styles';

export default function OnboardingContent({
  data,
  currentStep,
  handleBtnClickNext,
}) {
  const { illust, step, title, text1, text2, btn1_text, btn2_text } = data;

  return (
    <S.Container>
      <S.IllustBox>
        <S.Illust src={illust} alt='illust' />
      </S.IllustBox>
      <S.T>
        <S.BigText>{title}</S.BigText>
        <S.SmallText>{text1}</S.SmallText>
        <S.SmallText>{text2}</S.SmallText>
      </S.T>
      <S.StepIconBox>
        <S.StepIcon src={step} alt='step' />
      </S.StepIconBox>
      <S.Btns>
        <S.Btn onClick={handleBtnClickNext}>{btn1_text}</S.Btn>
        {currentStep !== 2 && (
          <S.Btn style={{ backgroundColor: '#EBEBFF', color: '#000' }}>
            {btn2_text}
          </S.Btn>
        )}
      </S.Btns>
    </S.Container>
  );
}
