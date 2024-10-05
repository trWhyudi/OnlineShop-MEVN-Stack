import { createRouter, createWebHistory } from 'vue-router';
import Product from '../views/product/ProductIndex.vue'
import ProductDetail from '../views/product/ProductDetail.vue'
import Cart from '../views/cart/CartIndex.vue';
import NotFound from '../views/errors/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;