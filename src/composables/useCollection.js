import { ref, watchEffect } from 'vue'
import { addDoc, collection } from 'firebase/firestore'

import { db } from '@/firebase/config'

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

  watchEffect(onInvalidate => {
    /* 
      Unsub from previous collection when watcher is stopped (Component unmounted)
      onInvalidate() fires when the component unmounts
      */
    onInvalidate(() => {})
  })

  return { error, addDocument }
}

export default useCollection
