import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Layout from './components/Layout'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    children: [
      { name: 'home', path: '/', component: Home },
      { path: '/about', component: About },
    ],
  },
]

export default routes
