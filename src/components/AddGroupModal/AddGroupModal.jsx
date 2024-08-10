import { useState } from 'react';
import * as S from './AddGroupModal.style';
import { InputWrapper } from '../InputWrapper';
import { PrimaryButton, SecondaryButton, BlueBadge } from '../';

export default function AddGroupModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newBadgeLabel, setNewBadgeLabel] = useState('');

  const [badges, setBadges] = useState([
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ]);

  const handleAddBadge = () => {
    const trimmedLabel = newBadgeLabel.trim();
    if (trimmedLabel && !badges.some((badge) => badge.label === trimmedLabel)) {
      setBadges((prev) => [
        ...prev,
        { label: trimmedLabel, value: trimmedLabel },
      ]);
      setNewBadgeLabel(''); // 입력 필드 비우기
    }
  };

  const handleXBtnClick = (badgeValue) => {
    setBadges((prev) => prev.filter((badge) => badge.value !== badgeValue));
  };

  const handleOpenCloseClick = () => {
    setIsModalOpen(false);
    console.log(badges);
  };

  return (
    <S.Container isModalOpen={isModalOpen}>
      <S.AddGroupModal>
        <S.Top>
          <S.DragBar />
          <S.ModalTitle>그룹 수정</S.ModalTitle>
        </S.Top>
        <S.Center>
          <InputWrapper
            label='그룹 명'
            placeholder='추가할 그룹 명을 입력하세요'
            textColor='#000'
            value={newBadgeLabel}
            iconId='circle-plus'
            iconFill='#9694FF'
            iconSize='20'
            iconClick={handleAddBadge}
            onChange={(e) => setNewBadgeLabel(e.target.value)}
          />
          <S.WarningMsg>
            * 그룹 삭제 시, 그룹에 속해 있는 모든 명함의 그룹 옵션이 해지되니
            신중하게 삭제해주세요.
          </S.WarningMsg>
          <S.GroupEditBox>
            <BlueBadge badges={badges} xBtnClick={handleXBtnClick} />
          </S.GroupEditBox>
        </S.Center>
        <S.Bottom>
          <PrimaryButton children='완료' onClick={handleOpenCloseClick} />
          <SecondaryButton children='취소' onClick={handleOpenCloseClick} />
        </S.Bottom>
      </S.AddGroupModal>
    </S.Container>
  );
}
