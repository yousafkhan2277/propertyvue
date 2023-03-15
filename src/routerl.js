import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Layout from "./components/Layout.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")

const routes = [
  
{
  path: '/',
  component: Layout,
  redirect: '/home',
  name: 'Root',
  children: [
    {
      path: "/home",
      component: Home,
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
  const publicPages = [ '/home'];
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