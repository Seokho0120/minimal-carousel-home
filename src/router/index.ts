import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('@/views/docs/docs.vue'), // docs 페이지
      children: [
        {
          name: 'Getting Started',
          path: 'getting-started',
          component: () => import('@/components/GettingStarted.vue'), // Getting Started 페이지
        },
        {
          name: 'imageItems',
          path: 'image-items',
          component: () => import('@/components/ImageItems.vue'), // imageItems 페이지
        },
        // {
        //   path: 'showPrevButton',
        //   name: 'showPrevButton',
        //   component: () => import('@/views/docs/ShowPrevButton.vue'), // showPrevButton 페이지
        // },
        // {
        //   path: 'showNextButton',
        //   name: 'showNextButton',
        //   component: () => import('@/views/docs/ShowNextButton.vue'), // showNextButton 페이지
        // },
        // // 나머지 Props에 대한 페이지 추가
        // {
        //   path: 'pagination',
        //   name: 'pagination',
        //   component: () => import('@/views/docs/Pagination.vue'), // pagination 페이지
        // },
        // {
        //   path: 'scrollbar',
        //   name: 'scrollbar',
        //   component: () => import('@/views/docs/Scrollbar.vue'), // scrollbar 페이지
        // },
        // {
        //   path: 'autoPlay',
        //   name: 'autoPlay',
        //   component: () => import('@/views/docs/AutoPlay.vue'), // autoPlay 페이지
        // },
        // {
        //   path: 'autoPlayDuration',
        //   name: 'autoPlayDuration',
        //   component: () => import('@/views/docs/AutoPlayDuration.vue'), // autoPlayDuration 페이지
        // },
        // {
        //   path: 'disableOnInteraction',
        //   name: 'disableOnInteraction',
        //   component: () => import('@/views/docs/DisableOnInteraction.vue'), // disableOnInteraction 페이지
        // },
        // {
        //   path: 'pauseOnMouseEnter',
        //   name: 'pauseOnMouseEnter',
        //   component: () => import('@/views/docs/PauseOnMouseEnter.vue'), // pauseOnMouseEnter 페이지
        // },
        // {
        //   path: 'stopOnLastSlide',
        //   name: 'stopOnLastSlide',
        //   component: () => import('@/views/docs/StopOnLastSlide.vue'), // stopOnLastSlide 페이지
        // },
        // {
        //   path: 'effectFade',
        //   name: 'effectFade',
        //   component: () => import('@/views/docs/EffectFade.vue'), // effectFade 페이지
        // },
        // {
        //   path: 'keyboardControl',
        //   name: 'keyboardControl',
        //   component: () => import('@/views/docs/KeyboardControl.vue'), // keyboardControl 페이지
        // },
        // {
        //   path: 'parallax',
        //   name: 'parallax',
        //   component: () => import('@/views/docs/Parallax.vue'), // parallax 페이지
        // },
        // {
        //   path: 'contents',
        //   name: 'contents',
        //   component: () => import('@/views/docs/Contents.vue'), // contents 페이지
        // },
      ],
    },
  ],
});

export default router;
