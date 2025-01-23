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
        <HomeMovieCard :movie="movie" />
      </v-col>
    </v-row>

    <v-pagination
      v-if="showPagination"
      v-model="moviesStore.page"
      :length="totalPages"
      class="my-4"
      @update:modelValue="moviesStore.searchMovies"
    ></v-pagination>
  </v-container>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();
const { movies, tmdbResponse } = storeToRefs(moviesStore);

const totalPages = computed(() => tmdbResponse.value?.total_pages);
const showPagination = computed(() => totalPages.value && totalPages.value > 1);

onMounted(() => {
  moviesStore.fetchMovies();
});
</script>
