import type { MovieDetails } from '~/types';

const API_ENDPOINT = 'https://api.themoviedb.org/3/movie';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const config = useRuntimeConfig();

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Movie ID is required',
    });
  }

  try {
    const data: MovieDetails = await $fetch(`${API_ENDPOINT}/${id}`, {
      params: {
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
