const routes = [{
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [{
      path: '',
      component: () => import('pages/Auth/Login.vue')
    }]
  },
  {
    path: '/register',
    component: () => import('layouts/RegisterLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Auth/Register.vue')
    }]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
