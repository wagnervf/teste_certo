import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/LayoutPadrao.vue'),
    children: [

      { path: '', component: () => import('pages/Users.vue') },
      { name: 'index', path: '/index', component: () => import('pages/Index.vue') },
      { name: 'profile', path: '/profile', component: () => import('pages/Profile.vue') },

      { path: 'users', component: () => import('pages/Users.vue') },
      // { path: 'imoveis', component: () => import('pages/Imoveis.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/Chat.vue') },
      //{ path: '/auth', component: () => import('pages/Auth/Auth.vue') }

      { name: 'imoveis', path: 'imoveis', component: () => import('pages/categorias/Imoveis.vue') }

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },

  { path: '/auth', component: () => import('pages/Login/Auth.vue') }

  //{ name: 'login', path: '/login', component: () => import('pages/Login/Login.vue') },

  //{ name: 'register', path: '/register', component: () => import('pages/Login/Register.vue') }

];

export default routes;
