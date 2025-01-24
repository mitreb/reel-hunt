<template>
  <v-container>
    <h1 class="text-h4 mt-16 mb-6">
      {{ route.params.id }}
    </h1>
    <p v-if="movieDetails">{{ JSON.stringify(movieDetails) }}</p>
  </v-container>
</template>

<script setup lang="ts">
import type { MovieDetails } from '~/types';
const route = useRoute();

const movieDetails = ref<MovieDetails | null>(null);

const { data } = await useFetch<MovieDetails>(`/api/movies/${route.params.id}`);
movieDetails.value = data.value;

console.log(movieDetails.value);
</script>
