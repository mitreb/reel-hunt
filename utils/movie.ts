export function voteAverageToPercentage(voteAverage: number): number {
  return Math.round(voteAverage * 10);
}

export function formatVoteAverage(voteAverage: number): string {
  return voteAverage.toFixed(1);
}
