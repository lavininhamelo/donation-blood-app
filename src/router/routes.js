const routes = [
  {
    path: "/",
    component: () => import("layouts/Default.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/Login.vue")
      }
    ]
  },
  {
    path: "/register",
    component: () => import("layouts/RegisterLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Auth/Register.vue")
      },
      {
        path: "step/1",
        component: () => import("pages/Auth/Steps/StepName.vue")
      },
      {
        path: "step/2",
        component: () => import("pages/Auth/Steps/StepBloodType.vue")
      },
      {
        path: "step/3",
        component: () => import("pages/Auth/Steps/StepKg.vue")
      },
      {
        path: "step/4",
        component: () => import("pages/Auth/Steps/StepInfection.vue")
      },
      {
        path: "step/5",
        component: () => import("pages/Auth/Steps/StepDistance.vue")
      },
      {
        path: "step/6",
        component: () => import("pages/Auth/Steps/StepWantGetNotification.vue")
      },
      {
        path: "step/7",
        component: () => import("pages/Auth/Steps/StepShareData.vue")
      },
      {
        path: "step/success",
        component: () => import("pages/Auth/Steps/StepSuccess.vue")
      },
      {
        path: "step/success/email",
        component: () => import("pages/Auth/Steps/StepEmail.vue")
      },
      {
        path: "step/success/password",
        component: () => import("pages/Auth/Steps/StepPassword.vue")
      },
      {
        path: "step/error",
        component: () => import("pages/Auth/Steps/StepError.vue")
      }
    ]
  },
  {path: "/profile",
    component: () => import("pages/User/Profile.vue")},
    {path: "/teste",
    component: () => import("pages/User/Teste.vue")},
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
