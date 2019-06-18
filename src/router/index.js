import Home from '@/view/Home'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'homePage',
    component: Home
  }
]

export default routes