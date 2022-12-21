<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useStoreSheet } from "@/stores/storeSheet";
import { useStoreCommon } from "@/stores/storeCommon";

const storeSheet = useStoreSheet();
const storeCommon = useStoreCommon();
storeSheet.init();
</script>

<template>
  <header>
    <nav
      class="flex flex-col items-center gap-x-5 pl-5 text-teal-300 bg-teal-900 opacity-70 bg-opacity-30 p-2 w-full"
    >
      <h1
        class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400"
      >
        Web development code snippets
      </h1>
      <div class="flex flex-row">
        <RouterLink class="p-1 mr-4" to="/">All</RouterLink>
        <!-- <RouterLink to="/promises">Promises</RouterLink> -->
        <button
          class="p-1 px-3 rounded-md bg-gray-900 hover:bg-gray-800 transition-all"
          @click="storeCommon.showAddNewCode = !storeCommon.showAddNewCode"
        >
          <span class="text-green-400" v-if="!storeCommon.showAddNewCode"
            >Add code</span
          >
          <span v-else class="line-through text-red-300">Add</span>
        </button>
      </div>
    </nav>
  </header>
  <main class="">
    <RouterView />
  </main>
</template>
