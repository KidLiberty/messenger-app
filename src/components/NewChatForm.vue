<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
    <button
      :class="message.length > 0 ? 'active' : 'inactive'"
      @click.prevent="handleSubmit"
    >
      Send
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { serverTimestamp } from '@firebase/firestore'

import { getUser, useCollection } from '@/composables'

export default {
  setup() {
    const { user } = getUser()
    const { addDocument, error } = useCollection('messages')
    const message = ref('')

    const handleSubmit = async () => {
      console.log(message.value.length)
      if (!message.value.length > 0) return

      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: serverTimestamp()
      }
      await addDocument(chat)
      if (!error.value) {
        message.value = ''
      }
    }

    return { message, handleSubmit, error }
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
button,
.active {
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
}

.inactive {
  background: #888;
  cursor: not-allowed;
  transition: all 0.2s ease-in-out;
}
</style>
