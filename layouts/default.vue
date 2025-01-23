<template>
  <v-app id="inspire">
    <v-app-bar height="56" class="px-4" flat>
      <v-container class="d-flex align-center">
        <v-icon size="36">mdi-movie-roll</v-icon>

        <v-app-bar-title class="text-h4 ml-4">Reel Hunt</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="moviesStore.term"
          variant="outlined"
          density="compact"
          hide-details
          append-inner-icon="mdi-magnify"
          placeholder="Search"
          @click:append-inner="searchMovies"
          @keyup.enter="searchMovies"
        ></v-text-field>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
      <Message />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const moviesStore = useMoviesStore();

function searchMovies() {
  moviesStore.searchMovies();
}
</script>
