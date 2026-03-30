<script setup lang="ts">
import { ref } from 'vue'
import Dashboard from './views/DashboardView.vue'

type View = 'dashboard' | 'favorites'

const currentView = ref<View>('dashboard')

function navigate(view: View) {
  currentView.value = view
}
</script>

<template>
  <div>
    <button @click="navigate('dashboard')">Dashboard</button>
    <button @click="navigate('favorites')">Favorites</button>

    <Dashboard v-if="currentView === 'dashboard'" />
    <!-- later you can add more views -->
  </div>
</template>