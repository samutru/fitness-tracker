import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/views/tabs/Tabs.vue';
import Login from '@/views/login/Login.vue';
import Signup from '@/views/login/Signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/workouts',
      },
      {
        path: 'profile',
        component: () => import('@/views/tabs/Profile.vue'),
      },
      {
        path: 'workouts',
        component: () => import('@/views/tabs/Workouts.vue'),
      },
      {
        path: 'exercises',
        component: () => import('@/views/tabs/Exercises.vue'),
      },
      {
        path: 'visualizations',
        component: () => import('@/views/tabs/Visualizations.vue'),
      },
      {
        path: 'addExercises/:id',
        component: () => import('@/views/workout/WorkoutAddExercises.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
