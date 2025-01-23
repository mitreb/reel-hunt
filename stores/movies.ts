import { defineStore } from 'pinia';
import type { Movie, TMDBResponse } from '~/types';

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([]);
  const isLoading = ref(false);

  async function fetchMovies(page = 1) {
    try {
      isLoading.value = true;
      const response = await $fetch<TMDBResponse>('/api/movies/discover', {
        params: { page },
      });
      movies.value = response.results;
    } catch (error) {
      const messageStore = useMessageStore();
      messageStore.message = (error as Error).message;
      messageStore.showMessage = true;
    } finally {
      isLoading.value = false;
    }
  }

  async function searchMovies(term: string, page = 1) {
    try {
      isLoading.value = true;
      const response = await $fetch<TMDBResponse>('/api/movies/search', {
        params: { term, page },
      });
      movies.value = response.results;
    } catch (error) {
      const messageStore = useMessageStore();
      messageStore.message = (error as Error).message;
      messageStore.showMessage = true;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    movies,
    isLoading,
    fetchMovies,
    searchMovies,
  };
});
