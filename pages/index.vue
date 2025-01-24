<template>
  <v-container>
    <h1 v-if="searchTerm" class="text-h4 mt-16 mb-6 text-truncate">
      <span class="text-no-wrap">Search results for</span>
      <span class="font-weight-bold ms-2">"{{ searchTerm }}"</span>
    </h1>
    <h1 v-else class="text-h4 mt-16 mb-6">Feature Today</h1>

    <v-row v-if="movies.length">
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

    <v-empty-state
      v-else
      class="pa-16"
      icon="mdi-movie-search"
      title="No movies found"
      subtitle="Try different keywords or check your spelling. You can also try searching for actor names, directors, or genres."
    />

    <v-pagination
      v-if="showPagination"
      :model-value="currentPage"
      :length="totalPages"
      class="my-4"
      @update:model-value="handlePageChange"
    ></v-pagination>
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();
const { searchTerm, movies, tmdbResponse, currentPage } =
  storeToRefs(moviesStore);

const totalPages = computed(() => tmdbResponse.value?.total_pages || 0);
const showPagination = computed(() => totalPages.value > 1);

async function handlePageChange(page: number) {
  await router.push({ query: { ...route.query, page } });
  moviesStore.searchMovies();
}

onMounted(() => {
  moviesStore.searchMovies();
});
</script>
