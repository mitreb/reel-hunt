<template>
  <div class="circle">
    <v-progress-circular
      :model-value="voteAverageToPercentage(movie.vote_average)"
      color="blue"
      size="44"
      width="5"
    >
      <p class="text-black font-weight-bold">
        {{ formatVoteAverage(movie.vote_average) }}
      </p>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types';
import { voteAverageToPercentage, formatVoteAverage } from '@/utils';

const { movie } = defineProps({
  movie: {
    type: Object as () => Movie,
    required: true,
  },
});
</script>
