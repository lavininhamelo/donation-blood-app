const routes = [{
    path: '/',
    component: () =>
      import('layouts/Default.vue'),
    children: [{
      path: '',
      component: () =>
        import('pages/Auth/Login.vue')
    }]
  },
  {
    path: '/register',
    component: () =>
      import('layouts/RegisterLayout.vue'),
    children: [{
        path: '',
        component: () =>
          import('pages/Auth/Register.vue')
      },
      {
        path: 'step/1',
        component: () =>
          import('pages/Auth/Steps/StepName.vue')
      },
      {
        path: 'step/2',
        component: () =>
          import('pages/Auth/Steps/StepBloodType.vue')
      },
      {
        path: 'step/3',
        component: () =>
          import('pages/Auth/Steps/StepKg.vue')
      }, {
        path: 'step/4',
        component: () =>
          import('pages/Auth/Steps/StepInfection.vue')
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () =>
      import('pages/Error404.vue')
  })
}

export default routes
