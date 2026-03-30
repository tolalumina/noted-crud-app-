<template>
  <div class="header">
    <input v-model="search" placeholder="Search notes..." />
    <button @click="$emit('create')">+ New Note</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>