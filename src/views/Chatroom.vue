<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import Navbar from '../components/Navbar'

export default {
  components: { Navbar },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

<style></style>
