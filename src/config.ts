import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://coloso-kr-blog.vercel.app/', // Site domain
    title: 'Coloso', // Site title
    author: 'Coloso', // Author name
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
  // 라이트/다크 전용 이미지 각각 등록
  bannerImageLight: "/coupon-banner-light.webp", 
  bannerImageDark: "/coupon-banner-dark.webp", 
  
  codes: [
    "gsd_autoblog2602_kr_30-1",
    "gsd_autoblog2602_kr_30-2",
    "gsd_autoblog2602_kr_30-3",
    "gsd_autoblog2602_kr_30-4",
    "gsd_autoblog2602_kr_30-5"
  ],
};
