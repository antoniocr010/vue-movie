import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeViews from '../views/HomeViews';
import MyList from '../views/MyList';
import LoaderVue from '../views/LoaderVue';
import MovieDetail from '../components/MovieDetail';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'loader',
    component: LoaderVue,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeViews,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieDetail,
  },

  {
    path: '/mylist',
    name: 'mylist',
    component: MyList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
