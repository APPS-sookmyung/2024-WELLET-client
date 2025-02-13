import { useEffect, useState } from 'react';
import { BlueBadge, PrimaryButton, SecondaryButton } from '../';
import { deleteGroup, postGroup } from '../../apis';
import { InputWrapper } from '../InputWrapper';
import * as S from './AddGroupModal.style';

export default function AddGroupModal({ isModalOpen, setIsModalOpen, badges }) {
  const [newBadgeLabel, setNewBadgeLabel] = useState('');
  const [modalBadges, setModalBadges] = useState([]);
  const [prevModalBadges, setPrevModalBadges] = useState([]);

  useEffect(() => {
    if (isModalOpen) {
      setNewBadgeLabel('');
      setModalBadges(badges);
      setPrevModalBadges(badges);
    }
  }, [isModalOpen, badges]);

  const handleAddBadge = () => {
    const trimmedLabel = newBadgeLabel.trim();
    if (
      trimmedLabel &&
      !modalBadges.some((badge) => badge.name === trimmedLabel)
    ) {
      setModalBadges((prev) => [
        ...prev,
        { id: trimmedLabel, name: trimmedLabel },
      ]);
      setNewBadgeLabel('');
    }
  };

  const handleDeleteBtnClick = (badgeName) => {
    setModalBadges((prev) => prev.filter((badge) => badge.name !== badgeName));
  };

  const fetchPostGroup = async (newGroupName) => {
    try {
      await postGroup({ name: newGroupName });
    } catch (error) {
      console.error('그룹 추가 실패: ', error);
    }
  };

  const fetchDeleteGroup = async (deleteGroupId) => {
    try {
      await deleteGroup({ category_id: deleteGroupId });
    } catch (error) {
      console.error('그룹 삭제 실패: ', error);
    }
  };

  const handleDoneBtnClick = () => {
    setIsModalOpen(false);

    const newBadges = modalBadges
      .filter(
        (badge) =>
          !prevModalBadges.some((prevBadge) => prevBadge.name === badge.name)
      )
      .map((badge) => badge.name);

    const deletedBadges = prevModalBadges;
    filter(
      (prevBadge) => !modalBadges.some((badge) => badge.name === prevBadge.name)
    ).map((prevBadge) => prevBadge.label);

    newBadges.forEach((badgeName) => {
      fetchPostGroup(badgeName);
    });

    deletedBadges.forEach((category_id) => {
      fetchDeleteGroup(category_id);
    });

    console.log('newBadges:', newBadges);
    console.log('deletedBadges:', deletedBadges);
  };

  const handleCancelBtnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <S.BackgroundBlur isModalOpen={isModalOpen} />}
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
              <BlueBadge
                badges={modalBadges}
                xBtnClick={handleDeleteBtnClick}
              />
            </S.GroupEditBox>
          </S.Center>
          <S.Bottom>
            <PrimaryButton children='완료' onClick={handleDoneBtnClick} />
            <SecondaryButton children='취소' onClick={handleCancelBtnClick} />
          </S.Bottom>
        </S.AddGroupModal>
      </S.Container>
    </>
  );
}
