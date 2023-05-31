import { createRouter, createWebHistory } from 'vue-router'

import { auth } from '@/firebase/config'
import Chatroom from '../views/Chatroom'
import Welcome from '../views/Welcome'

// Auth guards

// If user is not logged in
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

// If user is already logged in
const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
