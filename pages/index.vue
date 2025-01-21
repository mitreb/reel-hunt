<template>
  <v-container>
    <p class="text-h4 mt-16 mb-6">Feature Today</p>

    <div v-if="isLoading" class="text-center">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>

    <v-row v-else>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { movies, isLoading, fetchMovies } = useMovies();

onMounted(() => {
  fetchMovies();
});
</script>
