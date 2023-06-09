import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes : [
    {
      path: '/',
      name: 'residence',
      component: () => import('@/components/residence/residence.vue')
    },
    {
      path: '/',
      name: 'team',
      component: () => import('@/components/team/team.vue')
    }
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})

export default router
