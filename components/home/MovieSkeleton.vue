<template>
  <v-card class="bg-transparent">
    <div class="position-relative">
      <div style="aspect-ratio: 2/3">
        <v-skeleton-loader
          type="image"
          class="h-100 pa-0 ma-0"
        ></v-skeleton-loader>
      </div>
    </div>
    <v-card-text class="px-0">
      <v-skeleton-loader type="text" width="80%"></v-skeleton-loader>
      <v-skeleton-loader
        type="text"
        width="40%"
        class="mt-2"
      ></v-skeleton-loader>
    </v-card-text>
  </v-card>
</template>

<style scoped>
:deep(.v-skeleton-loader__image) {
  height: 100%;
  min-height: 100%;
}
</style>
