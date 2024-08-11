import React from 'react';
import * as S from './OnboardingContent.style';
import { PrimaryButton, SecondaryButton } from '../Button';

export default function OnboardingContent({
  data,
  currentStep,
  handleNextBtnClick,
  handleSkipBtnClick,
}) {
  const { illust, step, title, text, btn1_text, btn2_text } = data;

  return (
    <S.Container>
      <S.Center>
        <S.IllustBox>
          <S.Illust src={illust} alt='illust' />
        </S.IllustBox>
        <S.T>
          <S.BigText>{title}</S.BigText>
          <S.SmallText>{text}</S.SmallText>
        </S.T>
        <S.StepIcon src={step} alt='step' />
      </S.Center>
      <S.Btns>
        {currentStep === 2 && <S.Blank />}
        <PrimaryButton onClick={handleNextBtnClick}>{btn1_text}</PrimaryButton>
        {currentStep !== 2 && (
          <SecondaryButton
            onClick={handleSkipBtnClick}
            style={{ backgroundColor: '#EBEBFF', color: '#000' }}
          >
            {btn2_text}
          </SecondaryButton>
        )}
      </S.Btns>
    </S.Container>
  );
}
