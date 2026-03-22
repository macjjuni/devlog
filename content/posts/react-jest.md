---
title: "React 컴포넌트 테스트 코드 작성"
date: "2023-12-10"
category: "Dev"
tags: ["TIL"]
cover: ""
description: ""
---

![image.png](/images/posts/react-jest/jest.webp)

이번 주말은 이전 만들어 뒀던 리액트 보일러플레이트 마이그레이션과 Jest 테스트 코드 학습겸 `<Counter />` 컴포넌트에 테스트 코드를 작성하는데 시간을 다 보냈다. 테스트 코드는 다른 사람이 작성한 코드에 컨벤션을 익혀둘 필요가 있어보이고 테스트 파일을 어떤 식으로 관리하는 지와 무엇을 중점으로 테스트해야 하는지 등 생각할게 많아 보인다.

## 📦 초기 설정

### Install: Jest

```jsx
yarn add -D jest @types/jest babel-jest ts-jest ts-node jest-environment-jsdom
```

### Install: React Testing Library

```jsx
yarn add -D @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

### jest.config.ts

```jsx
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // roots: ['<rootDir>/src/__tests__/'],
  transform: { '^.+\\.(ts|tsx)$': ['ts-jest'] },
  moduleNameMapper: {
  //'\\.(css|less|svg)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1', // @ <= alias path
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
```

### babel.config.js

```jsx
module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
}
```

### jest.setup.ts

```jsx
import '@testing-library/jest-dom'
```

## ⚒️ 주로 사용하는 함수

### 📌 **describe(desc, func)**

describe 함수는 테스트를 그룹화하고 설정을 제공하는데 사용. 테스트 모음 내에 여러 개의 test를 포함할 수 있음.

### 📌 test**(content, func)**

테스트 케이스를 정의하는 함수. 단일 테스트 케이스를 정의하고 실행. 각 테스트 케이스는 독립적으로 실행되고, `expect` 함수를 사용해 예상 결과를 검증할 수 있다.

```tsx
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

### 📌 expect**(), toBe()**

테스트 케이스를 정의하는 함수. 단일 테스트 케이스를 정의하고 실행한다. 각 테스트 케이스는 독립적으로 실행되고, `expect` 함수를 사용해 예상 결과를 검증할 수 있다.

```tsx
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

`expect`에 결과 값과 `toBe` 함수에 결과 값으로 테스트 성공 여부를 체크.

### 📌 toBeInTheDocument()

```tsx
import { screen, render } from "@testing-library/react";
import App from './App'

describe("앱을 렌더링합니다.", () => {
  test("버튼이 있습니다.", () => {
    const render(<App />);
		const buttonEl = screen.getByTestId( 'app-button')
		expect(buttonEl).toBeInTheDocument()		
	})
})
```

`toBeInTheDocument()` 함수는 문서에 버튼이 존재하는지 검사한다. 렌더링 여부 테스트라고 해도 무방

## render() 테스트를 위한 컴포넌트 렌더링 함수

getBy로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 하나를 선택. 만약에 없다면 에러 발생. 현재까지는 getBy~ 함수로도 테스트를 진행하는데 무리가 없었다. query~ 도 있고 find~ 도 있다.

> ex) `getByText`, `getByLabelText`, `getByAltText`, `getByPlaceholderText`

## 🎆 렌더링 테스트

```tsx
// counter.test.tsx

import { render, screen } from '@testing-library/react'
import Counter from '.'

describe('<Counter /> Test', () => {
	const renderCounter = () => render(<Counter />)

	test('<CountText/> render test', () => {
		renderCounter()
    const countEle = screen.getByTestId('counter-text')
    expect(countEle).toBeInTheDocument()
  })

  test('<Counter/> Buttons render test', () => {
    renderCounter()
    const upButton = screen.getByTestId('counter-up-button')
    const downButton = screen.getByTestId('counter-down-button')
    const clearButton = screen.getByTestId('counter-clear-button')

    expect(upButton && downButton && clearButton).toBeInTheDocument()
  })
}
```

컴포넌트 각각의 `Dom Element` 요소 속성에 `data-testid` 값을 할당했다. `querySelector()`를 사용하는 것보다 용도에 맞는 query 함수가 제공되므로 알맞게 사용한다. `querySelector()` 로 **DOM** 요소를 찾는다면 if문으로 값을 체크까지 해줘야하므로 알맞은 query 함수를 사용하자(해당 DOM 요소룰 못찾으면 에러로 종료시켜 버리기 때문에 간편함 👍)

```html
<button type="button" data-testid="counter-up-button">Up<button>
```

## 🌀 Jest 라이프사이클

컴포넌트가 복잡해지면 자연스레 테스트 코드도 복잡해지는데, 자연스레 사용할 것 같다. 강의에서 DB서버에 연결하는데 사용 했던 것 같다.

- `beforeAll` : 테스트 파일 내 모든 테스트 작업 전 한번만 실행
- `beforeEach` : 모든 테스트 작업 전에 실행
- `afterAll` : 테스트 파일 내 모든 테스트 작업 종료 후 한번만 실행
- `beforeAll` : 모든 테스트 종료 후 실행

## 🗑️ 빌드 시 data-testId 속성 제거하기

`data-testId` 속성을 사용해 테스트 대상 엘리먼트를 찾는데, 빌드 단계에서 모두 제거하고 싶어 관련 내용을 찾아 봤고 Vite를 지원하는 라이브러리가 있었다.

```bash
yarn add -D react-remove-attr
```

```tsx
...
import removeAttr from 'react-remove-attr'

...
export default defineConfig(({ mode }) => {

	const removeAttrPlugin = isProd && removeAttr({ extensions: ['jsx', 'tsx'], attributes: ['data-testid'] })

	return {
		plugins: [removeAttrPlugin(), ...]
	}	

})
...
```

다만 해당 라이브러리는 **GPL-3.0** 라이센스를 가지고 있다.

[오픈 소스 개발자가 꼭 알아야 할 GPL 3.0 라이선스의 주요 사항](https://ycc4477.tistory.com/entry/%EC%98%A4%ED%94%88-%EC%86%8C%EC%8A%A4-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-GPL-30-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4%EC%9D%98-%EC%A3%BC%EC%9A%94-%EC%82%AC%ED%95%AD)