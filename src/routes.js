import Home from './Pages/Home.vue'
import NotFound from './Pages/NotFound.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/quiz/:anime',
    name: 'Quiz',
    component: () => import('@/Fetch.vue'),
    props: true
  },
  {
    path: '/:path(.*)',
    component: NotFound
  }
]
