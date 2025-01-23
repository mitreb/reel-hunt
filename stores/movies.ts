import { defineStore } from 'pinia';
import type { Movie, TMDBResponse } from '~/types';

export const useMoviesStore = defineStore('movies', () => {
  const page = ref(1);
  const term = ref('');

  const tmdbResponse = ref<TMDBResponse | null>(null);
  const isLoading = ref(false);

  const movies = computed(() => tmdbResponse.value?.results || []);

  async function fetchMovies() {
    try {
      isLoading.value = true;
      const response = await $fetch<TMDBResponse>('/api/movies/discover', {
        params: { page: 1 },
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

  async function searchMovies() {
    try {
      isLoading.value = true;
      const response = await $fetch<TMDBResponse>('/api/movies/search', {
        params: { term: term.value, page: page.value },
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
    page,
    term,
    tmdbResponse,
    isLoading,
    movies,
    fetchMovies,
    searchMovies,
  };
});
