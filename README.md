<div align="center">

### 📇 온라인 명함 보관 서비스 📇

![wellet logo](/src/assets/images/logo-description-wellet.png)

</div>
<br>

## 💁🏻‍♀️ 개발 팀 소개

<table style="text-align:center">
  <thead>
    <tr>
      <th style="text-align: center;">프로필</th>
      <th style="text-align: center;">이름 (세부 전공)</th>
      <th style="text-align: center;">역할</th>
      <th style="text-align: center;">개발 내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/junheekim61" target="_blank"><img src="https://avatars.githubusercontent.com/u/100200965?v=4" alt="김준희 프로필" width="100px" /></a></td>
      <td style="text-align: center;">김준희<br>(컴퓨터과학 22)</td>
      <td>Front-end</td>
      <td>온보딩 페이지 구현<br>카카오톡 로그인 페이지 구현<br>홈 화면 페이지 구현<br>그룹 수정 모달 구현</td>
    </tr>
    <tr>
      <td><a href="https://github.com/kimhyerims" target="_blank"><img src="https://avatars.githubusercontent.com/u/144879107?v=4" alt="김혜림 프로필" width="100px" /></a></td>
      <td style="text-align: center;">김혜림<br>(데이터사이언스 23)</td>
      <td>Front-end</td>
      <td>명함 상세 보기 및 수정하기 페이지 구현<br>내 명함 보기 및 수정하기 페이지 구현</td>
    </tr>
    <tr>
      <td><a href="https://github.com/misung-dev" target="_blank"><img src="https://avatars.githubusercontent.com/u/128569095?v=4" alt="류미성 프로필" width="100px" /></a></td>
      <td style="text-align: center;">류미성<br>(컴퓨터과학 21)</td>
      <td>Front-end</td>
      <td>Header, 검색창, Tab bar 등 컴포넌트 구현<br>명함 추가 페이지 구현 (사진 추가, 직접 입력)<br>그룹별 명함 보기 페이지 구현<br>내 명함 공유 모달 구현</td>
    </tr>
    <tr>
      <td><a href="https://github.com/lhaerim" target="_blank"><img src="https://avatars.githubusercontent.com/u/128566763?v=4" alt="이해림 프로필" width="100px" /></a></td>
      <td style="text-align: center;">이혜림<br>(컴퓨터과학 23)</td>
      <td>Back-end</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/ajung7038" target="_blank"><img src="https://avatars.githubusercontent.com/u/80907516?v=4" alt="주아정 프로필" width="100px" /></a></td>
      <td style="text-align: center;">주아정<br>(컴퓨터과학 23)</td>
      <td>Back-end<br>Leader</td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/hayeyoung" target="_blank"><img src="https://avatars.githubusercontent.com/u/144807080?v=4" alt="하예영 프로필" width="100px" /></a></td>
      <td style="text-align: center;">하예영<br>(데이터사이언스 23)</td>
      <td>Back-end</td>
      <td></td>
    </tr>
  </tbody>
</table>

<br>

## Git Convention

### Commit Convention

- `[FEAT]`: 새로운 기능 구현
- `[FIX]`: 버그 및 오류 수정
- `[DOCS]`: 문서 수정 (README.md 등)
- `[DESIGN]`: CSS 등 사용자 UI 디자인 변경
- `[STYLE]`: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- `[MOVE]`: 프로젝트 파일 및 코드 이동
- `[REMOVE]`: 불필요한 코드 및 파일을 삭제
- `[RENAME]`: 파일 및 폴더명을 변경
- `[REFACTOR]`: 코드 리팩터링
- `[COMMENT]`: 필요한 주석 추가 및 변경
- `[!HOTFIX]`: 급하게 치명적인 버그를 고쳐야하는 경우
- `[!BREAKING CHANGE]`: 커다란 API 변경의 경우
- `[TEST]`: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- `[CHORE]`: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)

### 커밋 메세지 예시

- git commit -m "#이슈 번호 [커밋 태그] 커밋 내용"
  - `ex ) git commit -m "#1 [FEAT] 회원가입 기능 완료"`

<br>

## Branch Strategy

### Branch Convention

- [MAIN] : 출시 가능한 프로덕션 코드를 모아두는 브랜치
- [DEV] : feature에서 기능 개발이 끝난 후 다음 버전 개발을 위한 코드를 모아두는 브랜치
- [FEATURE] : 하나의 기능을 개발하기 위한 브랜치, 기능개발 완료되면 develop 브랜치로 머지
- [FIX] : 에러 수정, 버그 수정
- [DOCS] : README, 문서
- [REFACTOR] : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- [MODIFY] : 코드 수정 (기능의 변화가 있을 때)
- [CHORE] : gradle 세팅, 위의 것 이외에 거의 모든 것

### Branch Naming 예시

- feat/#이슈 번호-기능 이름
  - `ex) feat/#1-login`

<br>

### Git Flow

기본적으로 Git Flow 전략을 이용한다. Fork한 후 나의 repository에서 작업하고 구현 후 원본 repository에 pr을 날린다. 작업 시작 시 선행되어야 할 작업은 다음과 같다.

```java
1. Issue를 생성한다.
2. feature Branch를 생성한다.
3. Add - Commit - Push - Pull Request 의 과정을 거친다.
4. Pull Request가 작성되면 작성자 이외의 다른 팀원이 Code Review를 한다.
5. Code Review가 완료되면 Pull Request 작성자가 develop Branch로 merge 한다.
6. merge된 작업이 있을 경우, 다른 브랜치에서 작업을 진행 중이던 개발자는 본인의 브랜치로 merge된 작업을 Pull 받아온다.
7. 종료된 Issue와 Pull Request의 Label과 Project를 관리한다.
```

- 기본적으로 git flow 전략을 사용합니다.
- main, dev, feature 3가지 branch 를 기본으로 합니다.
- main → dev → feature. feature 브랜치는 feat/기능명으로 사용합니다.
- 이슈를 사용하는 경우 브랜치명을 feat/[issue num]-[feature name]로 합니다.

<br>

### Issue Convention

- [FEAT] : 기능 추가
- [FIX] : 에러 수정, 버그 수정
- [DOCS] : README, 문서
- [REFACTOR] : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- [MODIFY] : 코드 수정 (기능의 변화가 있을 때)
- [CHORE] : gradle 세팅, 위의 것 이외에 거의 모든 것

### Issue Naming 예시

- [이슈 태그] 작업 내용
  - `ex) [FEAT] user api 구현`
