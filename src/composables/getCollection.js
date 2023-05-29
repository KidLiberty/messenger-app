import { ref, watchEffect } from 'vue'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore'

import { db } from '@/firebase/config'

const getCollection = collectionName => {
  const documents = ref(null)
  const error = ref(null)

  const q = query(collection(db, collectionName), orderBy('createdAt'))
  const unsub = onSnapshot(
    q,
    snap => {
      console.log('snap')
      let results = []
      snap.docs.forEach(doc => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
      error.value = null
    },
    error => {
      console.log(error.message)
      documents.value = null
      error.value = 'Could not fetch data.'
    }
  )

  watchEffect(onInvalidate => {
    /* 
      Unsub from previous collection when watcher is stopped (Component unmounted)
      onInvalidate() fires when the component unmounts
      */
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection
