<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}!</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

import { getUser, useLogout } from '@/composables'

export default {
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
      }
      router.push('/')
    }

    return { user, handleClick }
  }
}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* border-bottom: 1px solid #eee; */
}
nav div {
  text-align: left;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
