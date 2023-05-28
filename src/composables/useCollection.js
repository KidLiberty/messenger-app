import { ref } from 'vue'
import { db } from '@/firebase/config'
import { addDoc, collection } from 'firebase/firestore'

const useCollection = collectionName => {
  const error = ref(null)

  const addDocument = async doc => {
    error.value = null
    try {
      const dbRef = collection(db, collectionName)
      await addDoc(dbRef, doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not send the message.'
    }
  }

  return { error, addDocument }
}

export default useCollection
