import { createRouter , createWebHistory} from "vue-router";
//admin 
import homeAdminIndex from '../components/admin/home/index.vue' ;
// pages
import homePageIndex from '../components/pages/home/index.vue';
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
       //notFound
       {
          path:'/:pathMatch(.*)*',
          component: notfound
      }
  ]
 });
 export default router;