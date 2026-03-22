---
title: "리액트 변수 네이밍 컨벤션"
date: "2024-01-22"
category: "Dev"
tags: ["TIL"]
cover: ""
description: ""
---

![react](/images/react.webp)

리액트는 네이밍 규칙에 대한 구체적인 지침이나 설명, 권장 사항도 제공하지 않는다. ([출처](https://www.upbeatcode.com/react/react-naming-conventions/))

> ## React의 일반적인 명명 규칙
> React는 독립적인 프레임워크이며 이름 지정에도 동일하게 적용됩니다. 명명 규칙에 대한 구체적인 지침이나 설명은 없습니다. 자신에게 편한 명명 규칙을 자유롭게 사용할 수 있습니다. 설명서에서는 구체적인 권장 사항도 제공하지 않습니다.

공식문서에 검색해도 나오지 않고 자유롭게 컨벤션을 만들어 사용하라는 것 같다. 반면 Vue의 경우 디테일하게 공식 컨벤션을 제공한다. 
개인적으로 React에는 서양적 특성이, Vue에서는 동양적 특성이 담겨 있는거 같다.

[Vue.js 공식문서](https://ko.vuejs.org/style-guide/rules-strongly-recommended#prop-name-casing)

## ✅ 리액트 공식 문서에서 제공하는 네이밍 규칙

### 📌 업데이트 함수 인수의 이름 지정([링크](https://react.dev/learn/queueing-a-series-of-state-updates#naming-conventions))

```jsx
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
setAge(prevAge => prevAge + 1)
```

업데이터 함수 인수의 이름은 해당 상태 변수의 첫 글자로 지정하는 것이 일반적이다. 그러나 `prevAge`와 같이 더 명확하다고 생각되는 다른 이름으로 부를 수 있다.

### 📌 이벤트 함수 이름 지정 ([링크](https://react.dev/learn/responding-to-events#naming-event-handler-props))

```jsx
function CustomButton({ onSmash, children }) {
  return (<button onClick={onSmash}>{children}</button>);
}

export default function App() {
	return (
	  <div>
	    <Button onSmash={() => alert('Playing!')}>Play Movie</Button>
	    <Button onSmash={() => alert('Uploading!')}>Upload Image</Button>
	  </div>
	)
);
```

`<button/>` 및 `<div/>`와 같은 기본 제공 컴포넌트는 `onClick`과 같은 브라우저 이벤트 이름만 지원한다. 그러나 자체 컴포넌트를 빌드할 때 이벤트 핸들러 prop의 이름을 원하는 방식으로 지정할 수 있다. 

규칙에 따라 이벤트 핸들러 prop은 `on`으로 시작하고 그 뒤에 대문자가 와야 하는데, 예를 들어 `<CustomButton/>` 컴포넌트에 `onClick` 속성은 `onSmash`라고 부를 수 있다.

## 📄 리액트 공식 문서

[React](https://react.dev/)

공식 문서가 리뉴얼 된지 좀 됐다 😃