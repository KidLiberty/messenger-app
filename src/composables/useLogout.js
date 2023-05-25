import { ref } from 'vue'
import { signOut } from 'firebase/auth'

import { auth } from '@/firebase/config'

const error = ref(null)

const logout = async () => {
  error.value = null
  try {
    await signOut(auth)
    error.value = null
  } catch (err) {
    console.log(err)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout
