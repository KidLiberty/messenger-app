<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
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
import { computed, onUpdated, ref } from 'vue'
import { formatDistanceToNow } from 'date-fns'

import { getCollection } from '@/composables'

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

    // Auto scroll to bottom of messages
    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { documents, error, formattedDocuments, messages }
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
