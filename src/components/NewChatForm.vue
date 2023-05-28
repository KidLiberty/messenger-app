<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import { serverTimestamp } from '@firebase/firestore'

import { getUser } from '@/composables'

export default {
  setup() {
    const { user } = getUser()
    const message = ref('')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp()
      }
      console.log(chat)
      message.value = ''
    }

    return { message, handleSubmit }
  }
}
</script>

Scoped - Will not effect any other forms
<style scoped>
form {
  margin: 10px;
}
textarea {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  resize: none;
  outline: none;
}
</style>
