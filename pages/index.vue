<template>
  <v-container>
    <p class="text-h4 mt-16 mb-6">Feature Today</p>

    <v-row>
      <v-col
        v-for="(movie, index) in movies"
        :key="movie?.id || index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card v-if="movie" class="bg-transparent">
          <div class="position-relative">
            <v-img
              :src="
                movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : ''
              "
              aspect-ratio="2/3"
              cover
            ></v-img>
            <div class="circle">
              <v-progress-circular
                :model-value="voteAverageToPercentage(movie.vote_average)"
                color="blue"
                size="44"
                width="5"
              >
                <p class="text-black font-weight-bold">
                  {{ formatVoteAverage(movie.vote_average) }}
                </p>
              </v-progress-circular>
            </div>
          </div>
          <v-card-text class="px-0">
            <h3>{{ movie.title }}</h3>
            <p class="text-grey text-subtitle-2">
              {{ formatDateToMonthYear(movie.release_date) }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  formatDateToMonthYear,
  voteAverageToPercentage,
  formatVoteAverage,
} from '@/utils';
const { movies, isLoading, fetchMovies } = useMovies();
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

onMounted(() => {
  fetchMovies();
});
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
