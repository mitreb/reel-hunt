<template>
  <div class="circle">
    <v-progress-circular
      :model-value="scorePercentage"
      color="blue"
      size="44"
      width="5"
    >
      <p class="text-black font-weight-bold">
        {{ formattedScore }}
      </p>
    </v-progress-circular>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  score: number;
}>();

const { score } = toRefs(props);

const scorePercentage = computed(() => Math.round(score.value * 10));
const formattedScore = computed(() => score.value.toFixed(1));
</script>
