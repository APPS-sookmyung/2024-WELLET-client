import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './AddGroupModal.style';
import { InputWrapper } from '../InputWrapper';
import { PrimaryButton, SecondaryButton, BlueBadge } from '../';
import { getGroupList, postGroup, deleteGroup } from '../../apis';

export default function AddGroupModal({
  isModalOpen,
  setIsModalOpen,
  badges,
  setBadges,
}) {
  const [newBadgeLabel, setNewBadgeLabel] = useState('');
  const [groupListNames, setGroupListNames] = useState([]);
  const [modalBadges, setModalBadges] = useState([]);
  const [previousModalBadges, setPreviousModalBadges] = useState([]);

  const {
    data: groupListData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['groupList'],
    queryFn: () => getGroupList(),
  });

  // 모달이 열릴 때마다 modalBadges를 초기화
  useEffect(() => {
    if (isModalOpen) {
      setNewBadgeLabel('');
      setModalBadges(badges);
      setPreviousModalBadges(badges);
    }
  }, [isModalOpen, badges]);

  useEffect(() => {
    if (groupListData) {
      console.log('groupListData: ', groupListData.data);

      const initialBadges = groupListData.data.map((group) => ({
        label: group.id,
        value: group.name,
      }));

      const names = groupListData.data.map((group) => group.name);
      setGroupListNames(names);

      console.log('groupListNames: ', names);
    }
  }, [groupListData]);

  const handleAddBadge = () => {
    const trimmedLabel = newBadgeLabel.trim();
    if (
      trimmedLabel &&
      !modalBadges.some((badge) => badge.label === trimmedLabel) &&
      !badges.some((badge) => badge.value === trimmedLabel)
    ) {
      setModalBadges((prev) => [
        ...prev,
        { label: trimmedLabel, value: trimmedLabel },
      ]);
      setNewBadgeLabel('');
    }
  };

  const handleDeleteBtnClick = (badgeValue) => {
    setModalBadges((prev) =>
      prev.filter((badge) => badge.value !== badgeValue)
    );
  };

  const handleDoneBtnClick = () => {
    setIsModalOpen(false);

    const newBadges = modalBadges
      .filter(
        (badge) =>
          !previousModalBadges.some(
            (prevBadge) => prevBadge.value === badge.value
          )
      )
      .map((badge) => badge.value);

    const deletedBadges = previousModalBadges
      .filter(
        (prevBadge) =>
          !modalBadges.some((badge) => badge.value === prevBadge.value)
      )
      .map((prevBadge) => prevBadge.label);

    if (newBadges.length > 0) {
      newBadges.forEach((badgeName) => {
        if (badgeName.trim()) {
          postGroup({ name: badgeName }).catch((error) => {
            console.error('Failed to post new group:', error);
          });
        }
      });
    }

    // 삭제된 배지 처리
    if (deletedBadges.length > 0) {
      deletedBadges.forEach((category_id) => {
        const encodedCategoryId = encodeURIComponent(category_id); // URL 인코딩
        deleteGroup({ category_id: encodedCategoryId }).catch((error) => {
          console.error('Failed to delete group:', error);
        });
      });
    }

    console.log('modalBadges:', modalBadges);
    console.log('newBadges:', newBadges);
    console.log('deletedBadges:', deletedBadges);
    setBadges(modalBadges);
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
