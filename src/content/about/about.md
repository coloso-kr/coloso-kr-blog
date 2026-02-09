---
title: 'About'
---

<style>
  /* 1. 기본 상태 (라이트 모드): 검정 로고만 보이고 흰 로고는 '강제'로 숨김 */
  .logo-light { 
    display: block !important; 
  }
  .logo-dark { 
    display: none !important; 
  }

  /* 2. 다크 모드 감지: 검정 로고 숨기고 흰 로고만 '강제'로 표시 */
  @media (prefers-color-scheme: dark) {
    .logo-light { 
      display: none !important; 
    }
    .logo-dark { 
      display: block !important; 
    }
  }

  .adaptive-logo {
    width: 140px;
    margin-bottom: 1.5rem;
  }

  /* 텍스트 레이아웃 */
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
  }

  .hero-description {
    font-size: 0.95rem;
    line-height: 1.75;
    max-width: 700px;
    opacity: 0.8;
  }
</style>

<div class="hero-text-container">
  <img 
    src="/coloso_logo_black.png" 
    alt="Coloso" 
    class="adaptive-logo logo-light" 
  />
  
  <img 
    src="/coloso_logo_white.png" 
    alt="Coloso" 
    class="adaptive-logo logo-dark" 
  />

  <h1 class="hero-title">
    최고에게 배우는<br/>
    최상의 가치
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
