import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './AddGroupModal.style';
import { InputWrapper } from '../InputWrapper';
import { PrimaryButton, SecondaryButton, BlueBadge } from '../';
import { getGroupList, postGroup, deleteGroup } from '../../apis';

export default function AddGroupModal({
  member_id,
  isModalOpen,
  setIsModalOpen,
}) {
  const [newBadgeLabel, setNewBadgeLabel] = useState('');
  const [badges, setBadges] = useState([]);
  const [groupListNames, setGroupListNames] = useState([]); // 상태 추가
  const [showModal, setShowModal] = useState(isModalOpen);

  const {
    data: groupListData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['groupList', member_id],
    queryFn: () => getGroupList({ member_id }),
    enabled: !!member_id,
  });

  useEffect(() => {
    if (groupListData) {
      console.log('groupListData: ', groupListData.data);

      // 초기 badges와 groupListNames 배열을 생성
      const initialBadges = groupListData.data.map((group) => ({
        label: group.id,
        value: group.name,
      }));

      // badges 상태 설정
      setBadges(initialBadges);

      // groupListNames 배열 생성 및 상태 설정
      const names = groupListData.data.map((group) => group.name);
      setGroupListNames(names); // 상태로 저장

      // groupListNames을 로그로 출력
      console.log('groupListNames: ', names);
    }
  }, [groupListData]);

  const handleAddBadge = () => {
    const trimmedLabel = newBadgeLabel.trim();
    if (trimmedLabel && !badges.some((badge) => badge.label === trimmedLabel)) {
      setBadges((prev) => [
        ...prev,
        { label: trimmedLabel, value: trimmedLabel },
      ]);
      setNewBadgeLabel('');
    }
  };

  const handleDeleteBtnClick = (badgeValue) => {
    setBadges((prev) => prev.filter((badge) => badge.value !== badgeValue));
  };

  const handleDoneBtnClick = () => {
    setIsModalOpen(false);

    // 추가된 badges 찾기
    const newBadges = badges
      .filter((badge) => !groupListNames.includes(badge.value)) // badge.value를 사용
      .map((badge) => badge.value); // badge.name이 아니라 badge.value 사용

    // 각 newBadges에 대해 postGroup 호출
    newBadges.forEach((badgeName) => {
      postGroup({ member_id, name: badgeName });
    });

    // 삭제된 badges의 id값 찾기
    const deletedBadges = groupListData.data
      .filter((group) => !badges.some((badge) => badge.value === group.name)) // 현재 badges에 없는 그룹 이름 필터링
      .map((group) => group.id); // 삭제된 그룹의 ID를 가져옴

    // 각 deletedBadges에 대해 deleteGroup 호출
    deletedBadges.forEach((category_id) => {
      deleteGroup({ member_id, category_id });
    });

    console.log('badges: ', badges);
    console.log('newBadges: ', newBadges);
    console.log('deletedBadges: ', deletedBadges);
  };

  const handleCancelBtnClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {showModal && <S.BackgroundBlur isModalOpen={isModalOpen} />}
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
              <BlueBadge badges={badges} xBtnClick={handleDeleteBtnClick} />
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
