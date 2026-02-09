---
title: 'About'
---

<style>
  /* 다크모드 감지 및 대응 스타일 */
  @media (prefers-color-scheme: dark) {
    .adaptive-logo {
      filter: invert(1) brightness(2); /* 검은 로고를 흰색으로 반전 */
    }
  }
  
  /* 반응형 텍스트 스타일 */
  .hero-text-container {
    text-align: left;
    margin: 2rem 0;
  }
  
  .hero-title {
    font-size: 2.4rem;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    /* 색상을 지정하지 않아 테마 기본색(검정/흰색)을 따라감 */
  }

  .hero-description {
    font-size: 0.95rem;
    line-height: 1.75;
    max-width: 700px;
    opacity: 0.8; /* 회색 대신 투명도를 줘서 다크모드에서도 자연스럽게 */
  }
  
  .hero-description p {
    margin-bottom: 1rem;
  }
</style>

<div class="hero-text-container">
  <img 
    src="/coloso_logo.png" 
    alt="Coloso" 
    class="adaptive-logo" 
    style="width: 140px; margin-bottom: 1.5rem; display: block;" 
  />

  <h1 class="hero-title">
    최고에게 배우는 최상의 가치
  </h1>

  <div class="hero-description">
    <p>
      업계 최고 전문가들의 실무 경험을 한곳에 모았습니다. 이 블로그는 콜로소의 프리미엄 강의들을 분석하여, 창작자와 전문가를 꿈꾸는 이들을 위한 핵심 학습 요약을 제공합니다.
    </p>
    <p>
      동경하던 아티스트의 기술부터 실무자들의 시크릿 레시피까지. 콜로소의 방대한 지식들 중 나에게 딱 맞는 강의를 찾으실 수 있도록 돕습니다. 배움의 갈증을 해소하고, 어제보다 더 성장한 나를 만나는 시간을 콜로소와 함께 시작해 보세요.
    </p>
  </div>
</div>
