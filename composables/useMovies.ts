import type { Movie, TMDBResponse } from '~/types';

export function useMovies() {
  const movies = ref<Movie[]>([]);
  const isLoading = ref(false);

  async function fetchMovies(page = 1) {
    isLoading.value = true;
    try {
      const response = await $fetch<TMDBResponse>('/api/movies/discover', {
        params: { page },
      });
      movies.value = response.results;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    movies,
    isLoading,
    fetchMovies,
  };
}
