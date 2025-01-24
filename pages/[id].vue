<template>
  <v-container>
    <h1 class="text-h4 mt-16 mb-6">
      {{ route.params.id }}
    </h1>
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
