# [kkusaeng's Portfolio [Link]](https://www.macjjuni.com/)

<br>

<div align="center">
	<img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
		<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat&logo=Styled-Components&logoColor=white" />
</div>
  
<div align="center">

</div>

<div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
		<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white" />
	<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white" />
</div>
<br>

## 📸 Initial Screen

<img width="1508" alt="image" src="https://user-images.githubusercontent.com/38034518/218312477-cb8f8d1e-ab76-4939-9366-80d6302f1004.png">

## 🌲 Project Tree

```
kkusaeng's Portfolio
│
├─ pages            (📚) => 페이지 모음
├─ public           (🏛️) => 정적파일 모음
├─ src
│  ├─ api           (🕸️) => API 함수 모음
│  ├─ assets        (🏦) => 파일 리소스 모음
│  │
│  ├─ components    (🧩) => 컴포넌트 모음
│  │  ├─ common     (🛞) => 기능형 컴포넌트
│  │  └─ views      (🎨) => 레더형 컴포넌트
│  │
│  ├─ hoc           (🕹️) => HOC 컴포넌트 모음
│  ├─ hooks         (🪝) => 커스텀 훅 모음
│  │
│  ├─ layout        (🪟) => 레이아웃 모음
│  │  ├─ Footer
│  │  ├─ Header
│  │  └─ Main
│  │
│  ├─ Redux        (🪟) => 레이아웃 모음
│  │  ├─ slice     (🧀) => Redux Slice 모음
│  │  ├─ store.ts
│  │  └─ hook.ts
│  │
│  ├─ router        (🚦) => 라우팅 관련 모음
│  ├─ styles        (🕺) => 공통 스타일 코드
│  │
│  ├─ type          (🎲) => TS 타입 모음
│  └─ utils         (🛠️) => 유틸 함수 모음
│
├─ .eslintrc
├─ .prettierrc
│
├─ .env.developmnet
├─ .env.production
│
├─ tsconfig.json
├─ next.config.js
├─ package.json
└─ README.md
```

<br>

## 💻 Git Rules

### 📌 Commit

    1. 제목을 50글자 내로 제한
    2. 제목 끝에 마침표 넣지 않음
    3. 어떻게 보다는 무엇과 왜를 설명

### 📌 Commit Structure

<p>헤더는 필수이며, 범위(scope), 본문(body)은 선택사항</p>

```
<type>(<scope>): <subject>          -- 헤더
<BLANK LINE>                        -- 빈칸
<body>                              -- 본문(선택)
```

### 📌 Commit Type

```
feat : 새로운 기능에 대한 커밋 (*)
fix : 버그 수정에 대한 커밋 (*)
style : 코드 스타일 혹은 포맷 등에 관한 커밋 (*)
refactor :  코드 리팩토링에 대한 커밋 (*)
build : 빌드 관련 파일 수정에 대한 커밋 (*)
chore : 그 외 자잘한 수정에 대한 커밋 (*)
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋 (*)
test : 테스트 코드 수정에 대한 커밋
```

### 📌 Commit Example

```
docs(readme): 프로젝트 소개 및 규칙 작성
style(ui/input): secondary 스타일 작성
```

<br>
