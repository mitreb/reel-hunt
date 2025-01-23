import { defineStore } from 'pinia';
import type { Movie, TMDBResponse } from '~/types';

export const useMoviesStore = defineStore('movies', () => {
  const tmdbResponse = ref<TMDBResponse | null>(null);
  const isLoading = ref(false);

  const movies = computed(() => tmdbResponse.value?.results || []);

  async function fetchMovies(page = 1) {
    try {
      isLoading.value = true;
      const response = await $fetch<TMDBResponse>('/api/movies/discover', {
        params: { page },
      });
      tmdbResponse.value = response;
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
      tmdbResponse.value = response;
    } catch (error) {
      const messageStore = useMessageStore();
      messageStore.message = (error as Error).message;
      messageStore.showMessage = true;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    tmdbResponse,
    isLoading,
    movies,
    fetchMovies,
    searchMovies,
  };
});
