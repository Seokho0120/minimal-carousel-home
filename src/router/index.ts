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
      component: () => import('@/views/docs/docs.vue'),
      children: [
        {
          name: 'getting started',
          path: 'getting-started',
          component: () => import('@/components/GettingStarted.vue'),
        },
        {
          name: 'imageItems',
          path: 'image-items',
          component: () => import('@/components/ImageItems.vue'),
        },
        {
          name: 'showPrevButton',
          path: 'show-prev-button',
          component: () => import('@/components/ShowPrevButton.vue'),
        },
        {
          name: 'showNextButton',
          path: 'show-next-button',
          component: () => import('@/components/ShowNextButton.vue'),
        },
        {
          name: 'pagination',
          path: 'pagination',
          component: () => import('@/components/Pagination.vue'),
        },
        {
          name: 'dynamicBullets',
          path: 'dynamicBullets',
          component: () => import('@/components/DynamicBullets.vue'),
        },
        {
          name: 'scrollbar',
          path: 'scrollbar',
          component: () => import('@/components/Scrollbar.vue'),
        },
        {
          name: 'autoPlay',
          path: 'auto-play',
          component: () => import('@/components/AutoPlay.vue'),
        },
        {
          name: 'autoPlayDuration',
          path: 'auto-play-duration',
          component: () => import('@/components/AutoPlayDuration.vue'),
        },
        {
          name: 'disableOnInteraction',
          path: 'disable-on-interaction',
          component: () => import('@/components/DisableOnInteraction.vue'),
        },
        {
          name: 'pauseOnMouseEnter',
          path: 'pause-on-mouse-enter',
          component: () => import('@/components/PauseOnMouseEnter.vue'),
        },
        {
          name: 'stopOnLastSlide',
          path: 'stop-on-last-slide',
          component: () => import('@/components/StopOnLastSlide.vue'),
        },
        {
          name: 'effectFade',
          path: 'effect-fade',
          component: () => import('@/components/EffectFade.vue'),
        },
        {
          name: 'keyboardControl',
          path: 'keyboard-control',
          component: () => import('@/components/KeyboardControl.vue'),
        },
        {
          name: 'contents',
          path: 'contents',
          component: () => import('@/components/Contents.vue'),
        },
        // TODO:
        // {
        //   name: 'parallax',
        //   path: 'parallax',
        //   component: () => import('@/components/Parallax.vue'),
        // },
      ],
    },
  ],

  async scrollBehavior(to, _, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition;
    // }

    function findEl(
      hash: string,
      x: number = 1,
    ): HTMLElement | Promise<HTMLElement | undefined> {
      return (
        (document.querySelector(hash) as HTMLElement) ||
        new Promise((resolve) => {
          if (x > 50) {
            return resolve(undefined);
          }

          setTimeout(() => {
            resolve(findEl(hash, ++x));
          }, 100);
        })
      );
    }

    if (to.hash) {
      const el = await findEl(to.hash);

      if ('scrollBehavior' in document.documentElement.style) {
        return { top: el?.offsetTop, behavior: 'smooth' };
      } else {
        return { top: el?.offsetTop };
      }
    }

    return { top: 0, left: 0 };
  },

  // scrollBehavior() {
  //   return { top: 0 }; // 항상 페이지 상단으로 스크롤
  // },
});

export default router;
