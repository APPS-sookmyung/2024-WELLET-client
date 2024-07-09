import * as S from './styles.js';
import logoImg from '../../icons/logo.svg';
import OnboardingContent from '../../components/OnboardingContent/OnboardingContent.jsx';
import ONBOARDING from '../../constants/onboarding.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnBoarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleBtnClickNext = (e) => {
    if (step < 2) {
      setStep(step + 1);
      console.log(step);
    } else {
      navigate('/login');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logoImg} alt='Logo' />
      </S.Header>
      <OnboardingContent
        data={ONBOARDING[step]}
        currentStep={step}
        handleBtnClickNext={handleBtnClickNext}
      />
    </S.Container>
  );
}
