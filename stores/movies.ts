import { defineStore } from 'pinia';
import type { Movie, TMDBResponse } from '~/types';

export const useMoviesStore = defineStore('movies', () => {
  const route = useRoute();
  const tmdbResponse = ref<TMDBResponse | null>(null);
  const isLoading = ref(true);

  const movies = computed<Movie[]>(() => tmdbResponse.value?.results || []);
  const currentPage = computed(() => Number(route.query.page) || 1);
  const searchTerm = computed(() => route.query.q as string);

  async function searchMovies() {
    try {
      isLoading.value = true;
      const endpoint = `/api/movies/${
        searchTerm.value ? 'search' : 'discover'
      }`;
      const params = {
        ...(searchTerm.value && { term: searchTerm.value }),
        page: currentPage.value,
      };

      const response = await $fetch<TMDBResponse>(endpoint, { params });
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
    currentPage,
    searchTerm,
    searchMovies,
  };
});
