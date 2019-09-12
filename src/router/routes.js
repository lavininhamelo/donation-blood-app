const routes = [{
  path: '/',
  component: () => import('layouts/Default.vue'),
  children: [{
      path: '',
      component: () => import('pages/Index.vue')
    },
    {
      path: 'login',
      component: () => import('pages/Auth/Login.vue')
    },
    {
      path: 'register',
      component: () => import('pages/Auth/Register.vue')
    },
    {
      path: 'profile',
      component: () => import('pages/User/Profile.vue')
    },
    {
      path: 'update',
      component: () => import('pages/User/ProfileUpdate.vue')
    }
  ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
