<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value)
    }

    return { email, password, handleSubmit }
  }
}
</script>

<style></style>
