import { createRouter , createWebHistory} from "vue-router";
//admin 
import homeAdminIndex from '../components/admin/home/index.vue' ;
// pages
import homePageIndex from '../components/pages/home/index.vue';
import login from '../components/auth/login.vue'
//not found
import notfound from '../components/notFound.vue';
// const routes =
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //pages
        {
          path:'/',
          component: homePageIndex
      },
      //admin
      {
          path:'/admin/home',
          component: homeAdminIndex 
      },
      //login
      {
        path:'/login',
        component:login
      },
       //notFound
       {
          path:'/:pathMatch(.*)*',
          component: notfound
      }
  ]
 });
 export default router;