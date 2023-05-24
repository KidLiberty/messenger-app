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

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value)
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style></style>
