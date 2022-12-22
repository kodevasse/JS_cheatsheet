<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useStoreSheet } from "@/stores/storeSheet";
import { useStoreCommon } from "@/stores/storeCommon";

const storeSheet = useStoreSheet();
const storeCommon = useStoreCommon();
storeSheet.init();
</script>

<template>
  <div>
    <header class="">
      <nav
        class="flex flex-col items-center gap-x-5 pl-5 text-teal-300 bg-slate-900 bg-opacity-30 p-2 w-full"
      >
        <h1
          class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-lime-400 to-amber-300"
        >
          Web development code snippets
        </h1>
        <div class="flex flex-row mt-1">
          <RouterLink class="p-1 mr-4 text-lime-400 hover:text-teal-500" to="/"
            >All</RouterLink
          >
          <RouterLink
            class="p-1 mr-4 hover:text-teal-500 text-lime-600"
            to="/payment"
            >Payment<span
              class="absolute text-[0.65rem] text-green-500 -ml-8 -mt-0.5"
              >ongoing</span
            ></RouterLink
          >
          <RouterLink
            class="p-1 mr-4 hover:text-teal-500 text-lime-600"
            to="/payment"
            >Web3<span class="absolute text-[0.65rem] text-red-200 -ml-8 -mt-1"
              >comming</span
            ></RouterLink
          >
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
    <main>
      <RouterView />
    </main>
  </div>
</template>
