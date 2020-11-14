import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/LayoutTeste.vue'),
    children: [
      { name: 'inicio', path: '', component: () => import('pages/Index.vue') },
      { name: 'index', path: '/index', component: () => import('pages/Index.vue') },
      { name: 'categoria', path: '/categoria', component: () => import('pages/categorias/selecione-categoria.vue') },

      // { path: '', component: () => import('pages/Users.vue') },
      { name: 'auto-pecas', path: '/auto-pecas', component: () => import('pages/autoPecas.vue') },
      { name: 'esportes', path: '/esportes', component: () => import('pages/esportes.vue') },
      { name: 'profile', path: '/profile', component: () => import('pages/Profile.vue') },

      { path: 'users', component: () => import('pages/Users.vue') },
      // { path: 'imoveis', component: () => import('pages/Imoveis.vue') },
      { path: '/chat/:otherUserId', component: () => import('pages/Chat.vue') },
      //{ path: '/auth', component: () => import('pages/Auth/Auth.vue') }

      { name: 'imoveis', path: '/imoveis', component: () => import('pages/categorias/imoveis/Imoveis.vue') },
      { name: 'novo-imovel', path: '/imoveis/novo', component: () => import('pages/categorias/imoveis/add.vue') },


      { name: 'administracao', path: 'pages/configuracoes', component: () => import('pages/configuracoes/administracao.vue') }

    ],
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/LayoutTeste.vue'),
  //   children: [
  //     { name: 'inicio', path: '', component: () => import('pages/Index.vue') },
  //     { name: 'index', path: '/index', component: () => import('pages/Index.vue') },
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },

  { name: 'auth', path: '/auth', component: () => import('pages/Login/Auth.vue') }

  //{ name: 'login', path: '/login', component: () => import('pages/Login/Login.vue') },

  //{ name: 'register', path: '/register', component: () => import('pages/Login/Register.vue') }

];

export default routes;
