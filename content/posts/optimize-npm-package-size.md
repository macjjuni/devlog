---
title: "NPM 패키지 번들 사이즈 최적화"
date: "2024-09-25"
category: "Dev"
tags: ["TIL"]
cover: ""
description: ""
---

## 📦 번들 사이즈 확인

패키지 번들 사이즈를 확인하는 방법은 여러가지 있는데, NPM에 배포된 패키지라면 BundlePhobia에서 쉽게 확인할 수 있다.

[Bundlephobia | Size of npm dependencies](https://bundlephobia.com/)

![image1](/images/posts/optimize-npm-package-size/img1.webp)

내가 배포한 패키지구성요소 중 가장 큰 사이즈로 잡혀있는 녀석이 **lodash인데,** 트리 쉐이킹을 통해 번들 사이즈를 최적화해보자.

## 🌲 트리쉐이킹(Tree Shaking)

![image2](/images/posts/optimize-npm-package-size/img2.webp)

사용하는 곳은 uniqueId 함수 하나인데, 당장 lodash-es로 교체하고 다시 확인해보자.

### 📌 Before

```tsx
// src/util/lodashUtil.ts
import { uniqueId } from 'lodash';

export default { uniqueId };
```

### 📌 After

```tsx
// src/util/lodashUtil.ts
import { uniqueId } from 'lodash-es';

export default { uniqueId };
```

## ✨ 최적화 결과

![image3](/images/posts/optimize-npm-package-size/img3.webp)

lodash-es 패키지로 트리 쉐이킹을 적용한 결과 번들 사이즈는 89.1KB 에서 65.6KB로 `26%` 감소했다. 그래도 구성에서 lodash-es가 많은 부분을 차지하고 있는데, 사용하는 함수가 하나뿐인데 저렇게 많이 차지해도 되나 싶기도 하다. 시간이 지나 다른 함수도 사용할 가능성이 있어 일단 트리쉐이킹 적용에 의미를 둬본다.

## 번외

`lodash-es` 다음으로 react-dom에서 많은 용량을 차지하고 있어 찾아봤다. 팝업을 띄울 때, `react`에 `createRoot` 함수를 사용해서 그랬다.

![image4](/images/posts/optimize-npm-package-size/img4.webp)

팝업 띄우는 방식을 리팩토링 하니 코드 양도 줄고 패키지 사이즈도 줄었다 👍