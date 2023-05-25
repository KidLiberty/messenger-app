<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>Need an account? <span @click="showLogin = false">Sign Up</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already have an account?
        <span @click="showLogin = true">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm.vue'

export default {
  components: { LoginForm, SignupForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  margin: 10px;
}
/* Form Styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 20px;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  color: rgba(90, 228, 202, 75%);
  font-weight: bold;
}
.welcome span:hover {
  cursor: pointer;
  color: rgb(90, 228, 202);
  transition: all 0.2s ease-in-out;
}
</style>
