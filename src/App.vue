<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav
      class="flex flex-row gap-x-5 text-teal-300 bg-teal-900 opacity-70 bg-opacity-30 p-2 w-full"
    >
      <RouterLink class="ml-10" to="/">Home</RouterLink>
      <RouterLink to="/promises">Promises</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
