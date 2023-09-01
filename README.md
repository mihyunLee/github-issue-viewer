# Github Issue Check

> 원티드 프리온보딩 인턴십 2주차 개인 과제 <br>
> facebook의 react Repository에서 오픈된 이슈를 체크해볼 수 있는 웹 사이트입니다.

<img width="1255" alt="image" src="https://github.com/mihyunLee/github-issue-viewer/assets/51310674/a1c17691-5f9f-4ea5-831a-67b5d3ea363e">


<br />

# 🚀 Getting Started

## 배포 링크

https://react-github-issue-viewer.netlify.app/

## 설치

```
$ git clone https://github.com/mihyunLee/github-issue-viewer.git
$ npm install
```

## 실행

```
$ npm start
```

<br />

# ✅ 과제 요구사항

- 필수 요구 사항

  - 이슈 목록 및 상세 화면 기능 구현
  - 데이터 요청 중 로딩 표시
  - 에러 화면 구현
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

- 선택 사항

  - CSS-in-JS 적용

<br>

## 1. 이슈 목록 화면 구현

### Assignment 1. Github API를 활용하여 이슈 목록 가져오기

Github API를 활용하여, 이슈 목록을 가져옵니다.

- [x] 데이터 요청 중 로딩 표시와 에러 화면을 구현합니다.
- [x] 이슈 목록을 정렬합니다. (open 상태의 이슈 중 코멘트가 많은 순)
- [x] 각 행에는 ‘이슈 번호, 이슈 제목, 작성자, 작성일, 코멘트 수’를 표시합니다.

<b>✨ 구현 방식</b>

```
Github API 공식 Client인 Octokit을 사용할 수 있었지만, 기존에 많이 사용되고 있는 axios 라이브러리를 사용하여 api를 요청하였습니다.
axios 인스턴스와 interceptor를 활용하여 공통된 api 요청 로직을 분리하고,
useInfiniteQuery() 커스텀 훅을 만들어 api 요청 상태와 응답 데이터 등을 해당 컴포넌트가 아닌 훅에서 관리하도록 하였습니다.
```

<br>

- 💡 고민한 부분

현재 useInfiniteQuery 훅 안에서는 hasNextPage라는 상태값을 관리하고 있습니다.
다음 페이지가 있는지에 대한 여부를 저장하고 있는데, 한 페이지당 보여질 데이터의 수인 ISSUE_PER_PAGE 상수를 참조하여 해당 상태값이 결정되고 있어서
커스텀 훅의 재사용성을 저하시킨다는 단점이 있습니다.
이 부분은 추후 리팩토링이 필요한 부분입니다.

<br>

### Assignment 2. 광고 이미지 출력하기

다섯 번째 셀마다 광고 이미지를 출력합니다.

- 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동합니다.

<b>✨ 구현 방식</b>

```
api 요청으로 받아온 데이터를 map 메서드를 사용하여 렌더링하고 있기 때문에
map 메서드의 두번째 인자인 index를 활용하여 index 값에 따라
이슈 목록의 5번째 셀마다 광고를 삽입하였습니다.
```

<br>

### Assignment 3. 무한 스크롤링 구현

화면을 아래로 스크롤 할 시 이슈 목록을 추가합니다.(인피니티 스크롤)

<b>✨ 구현 방식</b>

```
scroll 이벤트는 호출이 잦아 성능 저하를 일으킬 수 있기 때문에 Intersection Observer API를 사용하여
useObserver() 훅을 만들어 인피니티 스크롤을 구현하였습니다.
useInfiniteQuery() 훅에서 반환하는 hasNextPage와 fetchNextPage()를 활용하여
다음 페이지가 존재한다면 패치 함수를 실행하는 로직으로 동작합니다.
```

<br>

## 2. 이슈 상세 화면 구현

### Assignment 4. 이슈 상세 내용 표시

이슈의 상세 내용 표시합니다.

- [x] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

<b>✨ 구현 방식</b>

```
이슈 목록에서 이슈를 클릭하여 상세 페이지로 이동할 때 React Router의 useNavigate()를 사용하였습니다.
따라서 해당 navigate 함수의 state로 클릭한 이슈에 대한 정보를 전달하고,
상세 페이지에서 useLocation().state 값을 가져와 렌더링하였습니다.

이슈의 본문은 마크다운 형식의 문자열로 되어있어 렌더링 시 내용 파악이 어려운
문제가 발생하여 ReactMarkdown 라이브러리를 사용해서 렌더링하였습니다.
```

<br>

## 3. 공통 헤더 구현

### Assignment 5. 이슈 목록과 상세 화면이 공통으로 가지고 있는 헤더 구현

<b>✨ 구현 방식</b>

```
공통 Header 컴포넌트를 만들어 각 페이지에서 컴포넌트를 렌더링하였습니다.
라우터에서 이슈 목록 페이지와 상세 페이지를 감싸고, Header 컴포넌트에서
React Router의 Outlet을 렌더링하는 방식 사이에서 고민했지만,
페이지 컴포넌트를 보았을 때 전체적인 UI 구조를 파악하기에
각 페이지에서 컴포넌트를 렌더링하는 것이 편이하다고 판단하여 해당 방식으로 구현하였습니다.
```

<br>

# 🤝 Commit Convention

| 태그        | 설명 (한국어로만 작성하기)                                     |
| ----------- | -------------------------------------------------------------- |
| `FEAT:`     | 새로운 기능 추가 (변수명 변경 포함)                            |
| `FIX:`      | 버그 해결                                                      |
| `DESIGN:`   | CSS 등 사용자 UI 디자인 변경                                   |
| `STYLE:`    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| `REFACTOR:` | 프로덕션 코드 리팩토링                                         |
| `COMMENT:`  | 필요한 주석 추가 및 변경                                       |
| `DOCS:`     | 문서를 수정한 경우                                             |
| `CHORE:`    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| `RENAME:`   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| `REMOVE:`   | 파일을 삭제하는 작업만 수행한 경우                             |
| `INIT:`     | 초기 커밋을 진행한 경우                                        |
