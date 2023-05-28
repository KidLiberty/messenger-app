import { createApp } from 'vue'
import App from './App.vue'

import { auth } from './firebase/config'
import router from './router'

import './assets/main.css'

/*
 Wait for Firebase backend to connect before mounting, this ensures
 Route Guards function properly when verifying where to route the user
 if they refresh the chatroom
*/
let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
