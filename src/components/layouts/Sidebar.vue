<script setup lang="ts">
const emit = defineEmits<{
  (e: 'navigate', view: string): void
}>()
</script>

<template>
  <div class="sidebar">
    <button @click="emit('navigate', 'dashboard')">
      Dashboard
    </button>

    <button @click="emit('navigate', 'favorites')">
      Favorites
    </button>
  </div>
</template>