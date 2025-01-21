import type { TMDBResponse } from '~/types';

const API_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie';

export default defineEventHandler(async (event) => {
  const { page = 1 } = getQuery(event);
  const config = useRuntimeConfig();

  try {
    const data: TMDBResponse = await $fetch(API_ENDPOINT, {
      params: {
        page,
        api_key: config.tmdbApiKey,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});
