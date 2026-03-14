---
title: "Vue - Pinia 상태 관리"
date: "2023-05-09"
category: "Dev"
tags: ["TIL"]
cover: ""
description: ""
---

![pinia](https://pinia.vuejs.org/logo.svg)

새로운 업무가 주어져 **TIL(Today I Learned)** 바로 시작한다. 진행하는 프로젝트는 `Vue3` + `Pinia`를 사용하고 있다. (~~타입스크립트는..~~) Vue에서 Vuex 말고는 사용해본 경험이 없어 이름조차 처음 들어봤다.

## Pinia 공식문서

[Pinia 🍍](https://pinia.vuejs.org/introduction.html)

## 특징

- Vuex 보다 쉬움
- DevTools 지원
- HMR(Hot Module Replace) 지원
- 플러그인 기능 확장
- TS지원
- SSR지원

## Pinia Guide

### 1. 설치

```bash
yarn add pinia
# or with npm
npm install pinia
```

### 2. 스토어 생성(Composition API)

```jsx
// src/stores/counter.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCountStore = defineStore('counter', () => {
  const count = ref(0)
  const increase = () => {
    count.value += 1
  }
  const getCount = () => computed(() => count.value)
  return { count, getCount, increase }
})
```

- 스토어 변수는 **`ref()`**를 사용하면서 state 속성으로 선언
- Vuex의 getters는 **`getCount`** 함수 처럼 **`computed()`**로 구현
- **`increase()`** 함수는 actions 역할

스토어 선언 객체 하나에 스토어 변스와 getters, actions로 구성되어 기존 Vuex 보다 단순한 구조

### 3. 스토어 연결

```jsx
// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

### 4. 사용

```html
<template>
  <div>
    <div>{{ getCounter() }}</div>
    <button @click="increase ">증가(+)</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useCountStore } from "./stores/counter"

const { getCounter, increase } = useCountStore()

</script>
```

Vuex는 **`getters`**, **`actions`**,  **`mutations`** 등 구조화되어 아는 만큼 잘 사용할 수 있지만 그만큼 진입장벽이 높다는 단점이 있어서 그런지 `Redux`에서 `Zustand`로 마이그레이션 하는 느낌을 받았다.