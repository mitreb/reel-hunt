import type { TMDBResponse } from '~/types';

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';

export default defineEventHandler(async (event) => {
  const { term, page = 1 } = getQuery(event);
  const config = useRuntimeConfig();

  if (!term) {
    throw createError({
      statusCode: 400,
      message: 'Search term is required',
    });
  }

  try {
    const data: TMDBResponse = await $fetch(API_ENDPOINT, {
      params: {
        query: term,
        page,
        api_key: config.tmdbApiKey,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});
