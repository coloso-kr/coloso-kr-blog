import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://coloso-kr-blog.vercel.app/', // Site domain
    title: 'Coloso 공식 블로그', // Site title
    author: 'Coloso 공식 블로그', // Author name
    description: '최고에게 배우는 최상의 가치, 콜로소', // Site description
    language: 'ko-KR' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '35rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: false, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD', // Date format
    dateSeparator: '.', // Date separator
    dateOnRight: true // Date position
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false, // Show reading time in posts
    toc: true, // Show table of contents
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button
    linkCard: true // Enable link card
  }
}; // <--- 🌟 중요: themeConfig는 여기서 끝납니다!

// --- 🎁 월간 쿠폰 시스템 설정 ---
export const COUPON_SYSTEM = {
  enabled: true,  // 💡 이제 사용하니까 true로!
  bannerImageLight: "/coupon-banner-light.webp", 
  bannerImageDark: "/coupon-banner-dark.webp", 
  
  // ✅ 할인액별로 쿠폰 리스트를 분리해서 넣으세요.
  codes: {
    "30000": [
      "gsd_autoblog2602_kr_30000-1",
      "gsd_autoblog2602_kr_30000-2",
      "gsd_autoblog2602_kr_30000-3",
      "gsd_autoblog2602_kr_30000-4",
      "gsd_autoblog2602_kr_30000-5"
    ],
    "40000": [
      "gsd_autoblog2602_kr_40000-1",
      "gsd_autoblog2602_kr_40000-2",
      "gsd_autoblog2602_kr_40000-3",
      "gsd_autoblog2602_kr_40000-4",
      "gsd_autoblog2602_kr_40000-5"
    ]
  },
};
