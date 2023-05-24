<template>
  <div class="welcome container">
    <p>Welcome!</p>
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm.vue'

export default {
  components: { LoginForm, SignupForm }
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
</style>
