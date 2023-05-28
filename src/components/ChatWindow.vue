<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents">
      <div
        class="single"
        v-for="{ id, name, message, createdAt } in formattedDocuments"
        :key="id"
      >
        <span class="created-at">{{ createdAt }} ago</span>
        <span class="name">{{ name }}</span>
        <span class="message">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollection } from '@/composables'
import { formatDistanceToNow } from 'date-fns'
import { computed } from 'vue'

export default {
  setup() {
    const { documents, error } = getCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time =
            formatDistanceToNow(doc.createdAt.toDate())
              .charAt(0)
              .toUpperCase() +
            formatDistanceToNow(doc.createdAt.toDate()).slice(1)
          return { ...doc, createdAt: time }
        })
      }
    })

    return { documents, error, formattedDocuments }
  }
}
</script>

<style>
.chat-window {
  text-align: start;
  background: #fafafa;
  padding: 0px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
