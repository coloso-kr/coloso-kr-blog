---
title: "마우스 커서만 바꿔도 꽃이 살아난다? 인터랙션 디자인, 정효가 알려주는 쫄깃한 애니메이션 비법"
description: "설화수, 컨버스 등 유명 기업과 협업한 크리에이티브 코더 정효가 알려주는 TouchDesigner, p5js를 활용한 인터랙션 디자인 기초부터 실전 아트워크 제작까지! 30가지 코딩 예제로 누구나 쉽게 실시간 쌍방향 디자인을 마스터할 수 있습니다."
pubDate: "2026-03-14"
updatedDate: "2026-03-14"
author: "정효"
slug: "creativecoder-jeonghyo-interactiondesign-260314"
heroImage: "https://cdn.day1company.io/prod/uploads/202307/093643-1093/kr-creativecoder-jeonghyo-og.jpg"
course_id: "211355"
instructor: "정효"
category: "그래픽디자인"
tags:
  - "그래픽디자인"
  - "Coloso"
  - "강의리뷰"
---

# 마우스 커서만 바꿔도 꽃이 살아난다? 인터랙션 디자인, 정효가 알려주는 쫄깃한 애니메이션 비법

## 🧐 마우스 인터랙션, 생각보다 간단하게 퀄리티 올리는 법
![강의 이미지 1](https://cdn.day1company.io/prod/uploads/202205/153402-637/graphicdesign-jeonghyowhy-sellingpoint2.png)
분명 시키는 대로 코딩했는데, 뭔가 밋밋하게 느껴질 때가 있죠. 특히 마우스 인터랙션은 의외로 간단한 함수 적용만으로도 훨씬 생동감 넘치는 결과물을 만들 수 있습니다. 예를 들어, 꽃잎이 마우스를 누르고 있을 때 살짝 더 솟아오르게 하거나, 놓았을 때 부드럽게 떨어지게 하는 것만으로도 훨씬 '쫄깃한' 느낌을 줄 수 있죠.

---

## 💡 마우스 인터랙션, 퀄리티를 높이는 정효만의 핵심 스킬 3가지

### 1. 마우스 인터랙션, ‘쫄깃함’ 더하기: `lerp` 함수와 `up` 변수의 마법
> `lerp` 함수와 `up` 변수를 활용하면 마우스를 누르고 있을 때와 뗄 때의 움직임에 미묘한 차이를 줄 수 있습니다. `targetH + up` 형태로 값을 적용하고, `mouseIsPressed` 조건문으로 `up` 변수에 값을 더해주거나 빼주면서 움직임의 속도를 조절해보세요. `lerp(targetH, targetH + up, 0.1)`와 같이 lerp의 세 번째 인자를 조절하면 더욱 부드럽거나 탄력있는 애니메이션을 만들 수 있습니다.

### 2. 무한 반복 인터랙션, '제한'과 '순환'으로 제어하기
> 인터랙티브 디자인에서 무한 증가는 치명적인 오류가 될 수 있습니다. 꽃이 특정 크기(예: 200px) 이상 커지지 않도록 `if (h > 200) h = 200;`과 같은 조건문을 적용하여 크기를 제한하세요. 더 나아가, 10까지 카운팅되면 다시 0으로 돌아가도록 `if (value > 10) value = 0;`과 같은 로직을 추가하면 자연스러운 루핑 애니메이션을 구현할 수 있습니다. 이는 유저에게 인터랙션을 반복적으로 경험하게 하거나 다음 인터랙션을 준비하는 데 효과적입니다.

### 3. `frameCount`와 모듈러 연산으로 '자동' 움직임 만들기
> 마우스 클릭 없이도 움직이는 인터랙션을 만들고 싶다면 `frameCount`를 활용하세요. `frameCount % 30`과 같이 모듈러 연산자를 사용하면 0부터 29까지 반복되는 값을 얻을 수 있습니다. 이 값을 이용해 특정 프레임 구간(예: 30~59)에서만 개체가 위로 들썩이도록 조건을 걸면, 자연스럽게 반복되는 들썩이는 애니메이션을 만들 수 있습니다. 자동차 애니메이션처럼 원하는 주기로 반복되는 효과를 구현하는 데 유용합니다.

👉 **[더 알아보기](https://coloso.co.kr/products/creativecoder_jeonghyo?utm_source=blog&utm_medium=organic&utm_campaign=pro_regular_creativecoder_jeonghyo_auto_all&utm_content=graphicdesign_creativecoder_jeonghyo_gsd-autoblog-interactiondesign-post-260314)**

---

## 🛠️ 실무 퀄리티를 결정짓는 핵심 스킬 & 디테일
![강의 이미지 2](https://cdn.day1company.io/prod/uploads/202205/153350-637/graphicdesign-jeonghyowhy-sellingpoint1.png)

-   **Partical 오퍼레이터 활용**: Sphere SOP와 Sort 오퍼레이터를 조합하여 파티클 생성 순서를 **Random**으로 섞어주면 훨씬 자연스러운 입자 효과를 만들 수 있습니다. Sphere의 Normal을 제거하는 **Point 오퍼레이터**를 활용하면 입자가 제자리에서 생성되고 사라지게 하여 원하는 운동성을 제어할 수 있습니다.
-   **3D 환경에서의 Instance 적용**: Particle의 위치 데이터를 **SOP to CHOP**으로 변환한 후, Geometry의 **Instance 탭**에서 **Default Instance OP**에 연결하세요. `tx, ty, tz` 채널을 Translate X, Y, Z에 매핑하여 개체를 복제할 수 있습니다. 개체의 크기 조절은 **Transform 오퍼레이터**를 사용하고, Sphere의 크기를 줄여 파티클의 밀도를 조절하는 것이 좋습니다.
-   **Phong Material로 불꽃/연기 표현**: MAT 그룹의 Phong Material을 사용하여 **Diffuse 컬러를 흰색**으로, **Emit 컬러의 Value를 0.7** 정도로 설정하면 불꽃처럼 발광하는 느낌을 표현할 수 있습니다. Particle 오퍼레이터의 **Forces 탭**에서 **Turbulence** 값을 조절하여 바람에 흩날리는 듯한 효과를 추가하면 더욱 입체적인 연출이 가능합니다.
-   **충돌 효과 구현**: Tube SOP의 **End Caps**를 켜고 **Radius를 조절**하여 뿔 형태를 만든 후, Particle 오퍼레이터의 **Collision 탭**에서 **Grid**와 연결하세요. Particle의 **Limits 탭**에서 **Hit Behavior를 Bounce on Contact**로 설정하면 충돌 후 튕겨 나오는 효과를, **Stick on Contact**로 설정하면 바닥에 붙는 효과를 줄 수 있습니다.

---

## 💬 자주 묻는 질문 (FAQ)

**Q. 마우스 커서 모양을 변경하는 방법은 무엇인가요?**

> p5.js에서 마우스 커서 모양은 `cursor()` 함수를 사용하여 변경할 수 있습니다. `cursor(HAND)`와 같이 함수 안에 원하는 커서 모양(예: HAND, ARROW, CROSS 등)을 입력하면 됩니다.

**Q. `frameCount`와 모듈러 연산자를 사용한 루핑 애니메이션이 왜 중요한가요?**

> 크리에이티브 코더 정효는 `frameCount % 주기` 연산을 통해 특정 주기마다 애니메이션이 반복되도록 만드는 것이 중요하다고 강조합니다. 이는 유저가 인터랙션을 반복적으로 경험하게 하거나, 다음 유저가 인터랙션을 경험할 수 있도록 하는 데 필수적인 장치이기 때문입니다.

**Q. TouchDesigner에서 개체의 크기를 조절하는 가장 효율적인 방법은 무엇인가요?**

> 크리에이티브 코더 정효는 개체의 크기를 조절할 때 SOP와 Geometry 사이에 **Transform 오퍼레이터**를 사용하여 **Uniform Scale 값을 조절**하는 것이 가장 효율적이라고 설명합니다. 이를 통해 개체를 원하는 크기로 쉽게 줄이거나 늘릴 수 있습니다.

---

## 👉 더 깊이 있는 과정을 원한다면?

-   **[정효의 전체 커리큘럼 확인하기](https://coloso.co.kr/products/creativecoder_jeonghyo?utm_source=blog&utm_medium=organic&utm_campaign=pro_regular_creativecoder_jeonghyo_auto_all&utm_content=graphicdesign_creativecoder_jeonghyo_gsd-autoblog-interactiondesign-post-260314)**



<div class="coupon-section" data-coupon-type="40000"></div>

