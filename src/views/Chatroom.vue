<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import { Navbar, NewChatForm } from '@/components'
import { getUser } from '@/composables'

export default {
  components: { Navbar, NewChatForm },
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
