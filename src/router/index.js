import { createWebHistory, createRouter } from "vue-router";
import FrontendLayout from "../layouts/frontendLayouts/index.vue";
import DashboardLayout from "../layouts/dashboardLayouts/index.vue";
import indexPublicPage from '../views/indexPublicPage.vue'
import addProperty from '../views/dashboard/addProperty.vue'
import changePassword from '../views/dashboard/changePassword.vue'

import updateProfile from '../views/dashboard/updateProfile.vue'
// lazy-loaded
const Profile = () => import("../components/Profile.vue")
const BoardAdmin = () => import("../components/BoardAdmin.vue")

const routes = [
  
{
  path: '/',
  component: FrontendLayout,
  redirect: '/home',
  name: 'Root',
  children: [
    {
      path: "/home",
      component: indexPublicPage,
    },
  ],
},
{
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/addProperty',
    name: 'Dashboard',
    children: [
      {
        path: "/addProperty",
        component: addProperty,
      },
      {
        path: "/changePassword",
        component: changePassword,
      },
      {
        path: "/updateProfile",
        component: updateProfile,
      },
    ],
},


  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/home','/dashboard','/addProperty'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;