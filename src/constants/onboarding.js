import illust1 from '../assets/images/onboarding_1.svg';
import illust2 from '../assets/images/onboarding_2.svg';
import illust3 from '../assets/images/onboarding_3.svg';
import step1 from '../assets/icons/step_1.svg';
import step2 from '../assets/icons/step_2.svg';
import step3 from '../assets/icons/step_3.svg';

const onboarding = [
  {
    illust: illust1,
    step: step1,
    title: '평소 명함관리,\n어떻게 하고 계신가요?',
    text: '점점 쌓여만 가는, 책상 위 어지럽혀진\n명함이 신경쓰이는 당신에게.',
    btn1_text: '다음으로',
    btn2_text: '건너뛰기',
  },

  {
    illust: illust2,
    step: step2,
    title: '놓친 정보가 있을까\n걱정이 된다면...',
    text: '정리가 안 된 명함과 연락처로 인해\n어려움을 겪고 있는 당신에게',
    btn1_text: '다음으로',
    btn2_text: '건너뛰기',
  },

  {
    illust: illust3,
    step: step3,
    title: '이제 위렛으로\nA부터 Z까지 해결해보세요.',
    text: '다양한 명함 관리부터 내 명함 설정까지\n한 번에 OK!',
    btn1_text: '시작하기',
    btn2_text: '',
  },
];

export default onboarding;
