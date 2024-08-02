import React from 'react';
import * as S from './MyPageEdit.style';
import logoicon from '../../icons/logo.svg';
//import { myInfo, myContact } from 'MyPage.jsx';
export default function MyPageEdit() {
  return (
    <>
      <S.Header>
        <S.welletlogo>
          <img src={logoicon} />
        </S.welletlogo>
        <S.EditIcon>편집완료</S.EditIcon>
      </S.Header>
    </>
  );
}
