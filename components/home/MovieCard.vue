<template>
  <v-card v-if="movie" class="bg-transparent">
    <div class="position-relative">
      <v-img
        :src="movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : ''"
        aspect-ratio="2/3"
        cover
      ></v-img>
      <ScoreCircle :score="movie.vote_average" />
    </div>
    <v-card-text class="px-0">
      <h3>{{ movie.title }}</h3>
      <p class="text-grey text-subtitle-2">
        {{ formatDateToMonthYear(movie.release_date) }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Movie } from '~/types';
import { formatDateToMonthYear } from '@/utils';

defineProps<{
  movie: Movie;
}>();

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
</script>

<style scoped>
.circle {
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  bottom: -0.5rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
