<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="displayName"
      placeholder="Display Name"
      required
    />
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

import useSignup from '@/composables/useSignup'

export default {
  setup() {
    const { error, signup } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('User signed up!')
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style></style>
