import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { AppRouteModule } from './router.config';

// 默认父组件
import Layout from '../layouts/IndexLayout/index.vue';

/* Router modules */

/**
 * 默认路由
 * meta 参数定义详见 router.config.ts
 */
const basicRoutes: AppRouteModule[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hideMenu: true,
    },
    component: () => import('../views/login/index.vue'),
  },
  // 重定向跳转
  {
    path: '/redirect',
    name: 'Redirect',
    component: Layout,
    meta: {
      title: 'Redirect',
      hideMenu: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        meta: {
          title: 'Redirect',
          hideMenu: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ '../views/redirect/index.vue'
          ),
      },
    ],
  },
  // 错误页面重定向
  {
    path: '/:path(.*)*',
    name: 'ErrorPage',
    component: Layout,
    meta: {
      title: 'ErrorPage',
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        name: 'ErrorPage',
        component: () => import('../views/exception/exception.vue'),
        meta: {
          title: 'ErrorPage',
          hideMenu: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  strict: true, // 末尾斜杠是否精确匹配
  routes: (basicRoutes as unknown) as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
