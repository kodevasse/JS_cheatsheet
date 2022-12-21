import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStoreCommon = defineStore("common", () => {
  const showAddNewCode = ref(false);
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {
  //     count.value++
  //   }

  return { showAddNewCode };
});
