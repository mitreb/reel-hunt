import type { Movie, TMDBResponse } from '~/types';

export function useMovies() {
  const movies = ref<Movie[]>([]);
  const messageStore = useMessageStore();

  async function fetchMovies(page = 1) {
    try {
      const response = await $fetch<TMDBResponse>('/api/movies/discover', {
        params: { page },
      });
      movies.value = response.results;
      // console.log(JSON.stringify(response, null, 2));
    } catch (error) {
      messageStore.message = (error as Error).message;
      messageStore.showMessage = true;
    }
  }

  return {
    movies,
    fetchMovies,
  };
}
