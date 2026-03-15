---
title: "프론트엔드 성능 개선으로 서버 트래픽 절감하기"
date: "2024-11-07"
category: "Dev"
tags: ["최적화"]
cover: ""
description: ""
---


## 💥사건의 발달

![analytics](/images/posts/frontend-strategies-for-cost-efficiency/img1.webp)

Firebase 무료 호스팅에 배포된 사이드 프로젝트가 있다. 한 통의 메일로 인해 최적화 작업에 들어갔다. 최근 비트코인 가격이 많이 올라 그런지 트래픽이 높아졌나 보다. 무료로 이용하는 만큼 최대한 아껴보도록 하자. Firebase는 아쉽게도 `월 10GB` 트래픽을 무료로 제공하고 있는데, Vercel에 `100GB`에 비하면 한 없이 짠 편이다. 이후에 사용자가 많아진다면 vercel로 이동하는 것도 하나의 방법일 듯하다.

[Only ₿itcoin](https://btc-price.web.app)

## 🔍 원인찾기

### 1. 구글 애널리틱스 트래픽 추적

![analytics](/images/posts/frontend-strategies-for-cost-efficiency/img2.webp)

구글 애널리틱스에서 트래픽 경로를 확인할 수 있는데, 대부분 트래픽은 `Direct`에서 온다는 걸 확인할 수 있다. `PWA` 형태로 만들었기 때문에 모바일 기기에서 홈 화면에 추가해서 접속 했거나 즐겨찾기로 접속하는 사용자가 많을 것이다. 트래픽이 어느정도 증가했기 때문에 사용량 알림 메일이 온 것은 정상적인 흐름으로 보인다.

### 2. Bundle Visualizer 확인

![analytics](/images/posts/frontend-strategies-for-cost-efficiency/img3.webp)

해당 프로젝트는 `Vite` 번들러를 사용하고 있고 `rollup-plugin-visualizer`플러그인을 통해 확인했다. 트래픽을 줄이려면 네트워크 응답 크기를 줄여야 한다. 네트워크 전송은 `gzip` 압축 형태로 전달되니 Visualizer 에서 `gzip`을 체크해서 확인한다. 대략 최적화할 대상을 물색해 봤을 때 `assets`, `moment` 정도가 보인다.

### 3. public 정적 파일 확인

Visualizer에서는 확인할 수 없는 자원인데, 브라우저에서 폰트나 이미지 등 필요에 의해 불러와 사용되기 때문이다. 이 또한 트래픽을 증가하는데 영향을 주므로 확인해 본다.

![analytics](/images/posts/frontend-strategies-for-cost-efficiency/img4.webp)

문제가 될만한 파일을 발견했다. 이미지도 얼마 없지만 `1MB`나 달하는 녀석이다. 만들적 원본 PNG 확장자로 `5MB`인 거대한 녀석을 `webp`확장자로 다이어트시킨 기억이 있는데, 아직도 문제가 될 만하다.

### 4. 코드 분할 적용 확인

사용하는 필요한 자원만 불러오도록 코드 분할을 적용하면 불필요한 자원은 요청하지 않으므로 트래픽 감소 효과가 기대된다. 프로젝트 초반에 개발할 당시 정말 작은 규모의 프로젝트라 코드 분할 까지는 신경 쓰지 못했는데, 이 번 기회에 적용해 본다.

## 🛠️ 솔루션

### 1. CJS 모듈 라이브러리 마이그레이션

CJS 모듈 라이브러리를 사용한다면 최신 ES모듈로 작성된 라이브러리로 마이그레이션 한다. `moment`라이브러리는 `gzip` 압축을 해도 `73.1KB` 번들 크기를 자랑한다. 반면 `dayjs`는 압축을 안해도 `6.9KB`로 매우 작다. 10배 이상 차이가 나므로 `dayjs`를 사용한다. 

[npm: kku-util](https://www.npmjs.com/package/kku-util)

이번 기회에 `kku-util` 이라는 공통 유틸리티 라이브러리를 만들었다. dayjs를 사용하고 있어서 이걸로 마이그레이션을 진행했다.

### 2.  Lottie 애니메이션 Json 파일 최적화

[Lottie JSON to Optimized Lottie JSON Converter - LottieFiles](https://lottiefiles.com/tools/lottie-json-to-optimized-lottie-json)

JSON의 경우 `gzip` 압축 사이즈 기준으로는 크게 바뀌지 않지만 `Rendered` 크기는 15%이상 최적화된다.

- block.json `8.76KB` ⇒ `6.84KB`
- premium.json `4.74KB` ⇒ `3.74KB`
- 404-bicoin.json ⇒ `46.47KB` ⇒ `0KB`(삭제)

### 3. Static Assets 최적화

폰트는 이미 서브셋 파일로 만들어 사용 중이다. 문제는 이미지인데, `1MB`에 달하는 크기를 파이어베이스 호스팅으로 사용하게 두는 건 낭비인 듯하다. 떠오르는 좋은 대안으로는 깃허브에 올라간 이미지의 raw 링크를 사용한다. 브라우저는 Firebase 서버가 아닌 깃허브 서버로 이미지를 요청할 테니 트래픽이 줄어들 것이다.

<div class="img-row">

![img](/images/posts/frontend-strategies-for-cost-efficiency/img5-1.webp)
![img](/images/posts/frontend-strategies-for-cost-efficiency/img5-2.webp)

</div>

### 4. 코드 분할(Code Splitting) 적용

React18 부터 `Suspense`와 `lazy`를 통한 코드 분할을 지원한다. 공식 문서에서는 React-Router를 사용한 Routing 기반 코드 분할을 추천하고 있다. 페이지가 많은 웹이라면 필수 불가결이다.

#### 📝 withSuspense.tsx

```jsx
import React, { Suspense, ComponentType, ReactNode } from "react";

export default function withSuspense<P extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<P>, fallback: ReactNode = <div>Loading...</div>) {
  const ComponentWithSuspense = (props: P) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  return React.memo(ComponentWithSuspense);
}
```

```jsx
// routes.ts
const HomePage = withSuspense(lazy(() => import("@/pages/home")));
```

`Suspense`를 감싸주는 `HOC` 컴포넌트를 만들어 페이지별로 적용했다.

## 📈 결과 확인

### 📦 네트워크 크기

#### 👎 Before

![network_before](/images/posts/frontend-strategies-for-cost-efficiency/img6-1.webp)

해결책이 적용되기 전 파일 사이는 `397KB`로 여기에 `1MB` 배경 이미지까지 불러온다면 사용되는 트래픽이 적은 편은 아니다. 그렇다면 적용 후 확인해보자.

#### 👍 After

![network_after](/images/posts/frontend-strategies-for-cost-efficiency/img6-2.webp)

하나의 JS 파일이 코드 분할로 인해  4개로 나뉘었고 총 `304.77kB` 크기로 기존보다 **23%** 감소했다. 비공식 `1MB`도 절약된 샘이다.

## 🖥️ 트래픽 근황

![trafic_analystic](/images/posts/frontend-strategies-for-cost-efficiency/img7.webp)

6일 부터 200~300 초반의 유입을 확인할 수 있으며, 큰 변동사항은 없다. 최적화는 모든 작업을 완료 후 배포한게 아닌, 순차적으로 작업 후 배포를 진행했다. 5일 부터 배포 작업이 진행됐고 7일에 모든 최적화 작업을 완료했다. 

![firebase_down](/images/posts/frontend-strategies-for-cost-efficiency/img8.webp)

Firebase 호스팅 사용량에 따르면 5일 부터 점차 낮아지고 있는 추세다. 가장 큰 비교군으로 1일과 10일을 볼 수 있다.

|  | 11/01 | 11/10 |
| --- | --- | --- |
| 트래픽 | 167 | 300 |
| 사용량(MB) | 395.86 | 187.97 |

1일과 10일 트래픽은 `167`에서 `300`으로 2배 가량 증가했는데, 사용량 `395MB` 에서 `187MB`로 2배 이상 감소됐다. 이 정도면 드라마틱한 결과로 볼 수 있겠다.

## 🏃🏻‍♂️ 앞으로

호스팅 사용량에 문제가 생긴다면.. Vercel로 이사해야겠다.