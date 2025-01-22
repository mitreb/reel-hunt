<template>
  <div class="circle">
    <v-progress-circular
      :model-value="voteAverageToPercentage(score)"
      color="blue"
      size="44"
      width="5"
    >
      <p class="text-black font-weight-bold">
        {{ formatVoteAverage(score) }}
      </p>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { voteAverageToPercentage, formatVoteAverage } from '@/utils';

defineProps({
  score: {
    type: Number,
    required: true,
  },
});
</script>
