import { ref } from 'vue'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore'

import { db } from '@/firebase/config'

const getCollection = collectionName => {
  const documents = ref(null)
  const error = ref(null)

  const q = query(collection(db, collectionName), orderBy('createdAt'))
  onSnapshot(
    q,
    snap => {
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

  return { documents, error }
}

export default getCollection
