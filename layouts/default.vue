<template>
  <v-app id="inspire">
    <v-app-bar height="56" class="px-4" flat>
      <v-container class="d-flex align-center">
        <v-icon size="36">mdi-movie-roll</v-icon>

        <v-app-bar-title class="text-h4 ml-4">Reel Hunt</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-text-field
          :model-value="searchTerm"
          variant="outlined"
          density="compact"
          hide-details
          append-inner-icon="mdi-magnify"
          placeholder="Search"
          @update:model-value="handleSearchInput"
          @click:append-inner="search"
          @keyup.enter="search"
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
const route = useRoute();
const router = useRouter();
const moviesStore = useMoviesStore();
const { searchTerm } = storeToRefs(moviesStore);

function handleSearchInput(term: string) {
  router.push({ query: { ...route.query, q: term || undefined } });
}

function search() {
  moviesStore.searchMovies();
}
</script>
