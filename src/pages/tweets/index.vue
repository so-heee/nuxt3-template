<template>
  <v-container>
    <h1>Tweets</h1>
    <v-btn color="primary" @click="ready = !ready"> ready? </v-btn>
    <div class="py-3">ready: {{ ready }}</div>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
const ready = ref(false)
</script>
