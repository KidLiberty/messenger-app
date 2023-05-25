import { ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {
  // Clear error on signup so we are not constantly showing to the user
  error.value = null

  try {
    // Created account is the Firebase object, it has a displayName property on it
    const createdAccount = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    if (!createdAccount) {
      throw new Error('Could not complete the signup.')
    }
    const { user } = createdAccount

    // Set the display name
    await updateProfile(user, { displayName })
    error.value = null

    return createdAccount
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
