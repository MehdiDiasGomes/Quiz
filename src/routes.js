import Home from './Pages/Home.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/quiz/:anime',
    name: 'Quiz',
    component: () => import('@/Fetch.vue'),
    props: true
  }
]
