import { ref } from 'vue'

import { auth } from '../firebase/config'

const user = ref(auth.currentUser)

// _user is the user we get back on an authentication change
auth.onAuthStateChanged(_user => {
  console.log(`User state change. Current user is: ${_user?.displayName}`)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
