import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import HomePage from '../pages/Home.vue';
import AboutPage from '../pages/About.vue';
import ContactPage from '../pages/Contact.vue';
import ProductPage from '../components/Product.vue';
const routes = [
  {
    path: '', component: HomePage,
  },
  {
    path: '/about', component: AboutPage
  },
  {
    path: '/contact', component: ContactPage
  },
  {
    path: '/product/:id', component: ProductPage
  }
]

const router = new VueRouter({
  mode:"history",
  routes,
  base: process.env.BASE_URL
})
export default router
