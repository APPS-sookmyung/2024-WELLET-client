import * as S from './OnBoardingPage.style.jsx';
import { Header } from '../../components';
import OnboardingContent from '../../components/OnboardingContent/OnboardingContent.jsx';
import ONBOARDING from '../../constants/onboarding.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnBoarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNextBtnClick = (e) => {
    step < 2 ? setStep(step + 1) : navigate('./login');
  };

  return (
    <S.OnBoardingPage>
      <Header fill='#2D29FF' />
      <OnboardingContent
        data={ONBOARDING[step]}
        currentStep={step}
        handleNextBtnClick={handleNextBtnClick}
        handleSkipBtnClick={() => navigate('./login')}
      />
    </S.OnBoardingPage>
  );
}
