import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'

// Initialization set up in firebase config
import { auth } from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
  error.value = null
  try {
    const signedInAccount = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const { user } = signedInAccount

    error.value = null

    console.log(user)
    return signedInAccount
  } catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
