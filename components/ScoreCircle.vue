<template>
  <div class="circle">
    <v-progress-circular
      :model-value="scorePercentage"
      :color="color"
      :bg-color="bgColor"
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
const SCORE_THRESHOLDS = {
  HIGH: 7,
  MEDIUM: 5,
} as const;

const SCORE_COLORS = {
  PRIMARY: {
    HIGH: 'green',
    MEDIUM: 'yellow-darken-2',
    LOW: 'red',
  },
  BACKGROUND: {
    HIGH: 'green-lighten-5',
    MEDIUM: 'yellow-lighten-4',
    LOW: 'red-lighten-5',
  },
} as const;

const props = defineProps<{
  score: number;
}>();

const { score } = toRefs(props);

const scorePercentage = computed(() => Math.round(score.value * 10));
const formattedScore = computed(() => score.value.toFixed(1));
const color = computed(() => {
  if (score.value >= SCORE_THRESHOLDS.HIGH) return SCORE_COLORS.PRIMARY.HIGH;
  if (score.value >= SCORE_THRESHOLDS.MEDIUM)
    return SCORE_COLORS.PRIMARY.MEDIUM;
  return SCORE_COLORS.PRIMARY.LOW;
});

const bgColor = computed(() => {
  if (score.value >= SCORE_THRESHOLDS.HIGH) return SCORE_COLORS.BACKGROUND.HIGH;
  if (score.value >= SCORE_THRESHOLDS.MEDIUM)
    return SCORE_COLORS.BACKGROUND.MEDIUM;
  return SCORE_COLORS.BACKGROUND.LOW;
});
</script>
