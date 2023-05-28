<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import { ChatWindow, Navbar, NewChatForm } from '@/components'
import { getUser } from '@/composables'

export default {
  components: { ChatWindow, Navbar, NewChatForm },
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
