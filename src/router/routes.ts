import { RouteDefinition } from '@open-cells/core/types';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home/home-page.js');
    },
  },
  {
    path: '/login',
    name: 'login',
    component: 'login-page',
    action: async () => {
      await import('../pages/login/login-page.js');
    },
  },
  {
    path: '/task/add',
    name: 'task-add',
    component: 'task-page',
    action: async () => {
      await import('../pages/task/task-page.js');
    },
  },
  {
    path: '/tasks/edit/:taskId',
    name: 'task-edit',
    component: 'task-page',
    action: async () => {
      await import('../pages/task/task-page.js');
    },
  },
];
