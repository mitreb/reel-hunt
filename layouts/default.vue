<template>
  <v-app id="inspire">
    <v-app-bar height="56" class="px-4" flat>
      <v-icon size="36">mdi-movie-roll</v-icon>

      <v-app-bar-title class="text-h4">Reel Hunt</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-text-field
        variant="outlined"
        density="compact"
        hide-details
        append-inner-icon="mdi-magnify"
        placeholder="Search"
      ></v-text-field>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
