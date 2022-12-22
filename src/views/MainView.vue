<script setup>
import { ref, computed, reactive, onMounted, watch } from "vue";
import { useStoreSheet } from "@/stores/storeSheet";
import { useStoreCommon } from "@/stores/storeCommon";
import "highlight.js/styles/stackoverflow-dark.css";

const storeSheet = useStoreSheet();
const storeCommon = useStoreCommon();
const searchText = ref("");

let str;
const items = computed(() => {
  return storeSheet.items;
});
// const items = [
//   {
//     title: "Vue Init 5",
//     href: "https://vuejs.org/guide/introduction.html",
//     cat: "Init",
//     desc1: "",
//     code1: "npm init vue@latest",
//     code2: "",
//   },
// ];

const copyURL = async (mytext) => {
  try {
    await navigator.clipboard.writeText(mytext);
  } catch ($e) {
    alert("Cannot copy");
  }
};

const rainBowColorFrom = computed(() => {
  let i = Math.floor(Math.random() * 9) * 100;

  let color = [
    "fuchsia",
    "red",
    "yellow",
    "emerald",
    "gray",
    "orange",
    "blue",
    "green",
    "teal",
    "cyan",
    "purple",
    "pink",
  ];
  let i2 = Math.floor(Math.random() * color.length);
  let randomColor = color[i2];

  return `from-${randomColor}-${i}`;

  // if (props.rainBow === "heavy") return "bg-red-400 text-black";
  // else if (props.rainBow === "light") return "bg-blue-300 text-black";
  // else return "bg-gray-800";
});
const resetFields = () => {
  newTitle.value = "";
  newCat.value = "";
  newHref.value = "";
  newDesc1.value = "";
  newDesc2.value = "";
  newDesc3.value = "";
  newDesc4.value = "";
  newCode1.value = ``;
  newCode2.value = ``;
  newCode3.value = ``;
  newCode4.value = ``;
  newArray1.value = [];
};

const showEditDelete = ref(false);
const littleOn = true;
const newTitle = ref("");
const newCat = ref("js");
const newHref = ref("");
const newDesc1 = ref("");
const newDesc2 = ref("");
const newDesc3 = ref("");
const newDesc4 = ref("");
const newCode1 = ref(``);
const newCode2 = ref(``);
const newCode3 = ref(``);
const newCode4 = ref(``);
const newArray1 = ref([]);
// const newArray = ref([]);
// const newArray1 = ref([
//   { color: "neutral", srcbg: "bg-neutral-400", 200: "bg-neutral-200" },

//   {
//     color: "slate",
//     srcbg: "bg-slate-400",
//     srclight: "slate-200",
//     srcdark: "slate-500",
//   },
//   { color: "stone", srcbg: "bg-stone-400" },
//   { color: "Zinc", srcbg: "bg-zinc-400" },
//   { color: "gray", srcbg: "bg-gray-400" },
//   { color: "red", srcbg: "bg-red-400" },
//   { color: "yellow", srcbg: "bg-yellow-400" },
//   { color: "orange", srcbg: "bg-orange-400" },
//   { color: "amber", srcbg: "bg-amber-400" },
//   { color: "lime", srcbg: "bg-lime-400" },
//   { color: "green", srcbg: "bg-green-400" },
//   { color: "emerald", srcbg: "bg-emerald-400" },
//   { color: "teal", srcbg: "bg-teal-400" },
//   { color: "cyan", srcbg: "bg-cyan-400" },
//   { color: "sky", srcbg: "bg-sky-400" },
//   { color: "blue", srcbg: "bg-blue-400" },
//   { color: "purple", srcbg: "bg-purple-400" },
//   { color: "violet", srcbg: "bg-violet-400" },
//   { color: "pink", srcbg: "bg-pink-400" },
//   { color: "rose", srcbg: "bg-rose-400" },
//   { color: "fuchsia", srcbg: "bg-fuchsia-400" },
//   { color: "indigo", srcbg: "bg-indigo-400" },
// ]);

const addToFirestore = async () => {
  // Push the array to the Firestore database
  await storeSheet.addItems(
    newTitle.value,
    newCat.value,
    newHref.value,
    newDesc1.value,
    newDesc2.value,
    newDesc3.value,
    newDesc4.value,
    newCode1.value,
    newCode2.value,
    newCode3.value,
    newCode4.value,
    newArray1.value
  );
  // reset fields
  resetFields();
};
const code = `import { useStoreSheet } from "@/stores/storeSheet";
import { useStoreCommon } from "@/stores/storeCommon";`;

// searching in title and text
const itemsFiltered = computed(() => {
  let items = computed(() => {
    return storeSheet.items.sort((a, b) => {
      let aTotalChars = 0;
      let bTotalChars = 0;

      // Calculate the total number of characters in each object
      for (const key in a) {
        if (a.hasOwnProperty(key) && typeof a[key] !== "undefined") {
          aTotalChars += a[key].length;
        }
      }
      for (const key in b) {
        if (b.hasOwnProperty(key) && typeof b[key] !== "undefined") {
          bTotalChars += b[key].length;
        }
      }

      // Compare the total number of characters in each object
      if (aTotalChars > bTotalChars) {
        return -1;
      }
      if (aTotalChars < bTotalChars) {
        return 1;
      }
      return 0;
    });
  });
  const titleSearch = computed(() => {
    return items.value.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.value.toLowerCase()) ||
        searchText.value.toLowerCase().includes(item.title.toLowerCase())
    );
  });
  return titleSearch.value;
  // const desc1Search = computed(() => {
  //   return titleSearch.value.filter(
  //     (item) =>
  //       item.desc1.toLowerCase().includes(searchText.value.toLowerCase()) ||
  //       searchText.value.toLowerCase().includes(item.desc1.toLowerCase())
  //   );
  // });
  // return desc1Search.value;
});
const catValues2 = ref([]);
// setTimeout(() => {
//   items.value.forEach((item) => {
//     if (!catValues2.value.includes(item.cat)) {
//       catValues2.value.push(item.cat);
//     }
//   });
// }, "1000");
watch(itemsFiltered, (newValue) => {
  newValue.forEach((item) => {
    if (!catValues2.value.includes(item.cat)) {
      catValues2.value.push(item.cat);
    }
  });
});
const catSelector = [
  "vue",
  "js",
  "npm",
  "TWCSS",
  "object",
  "vite",
  "icons",
  "CSS",
  "tips",
  "animations",
];
const getCat = () => {
  itemsFiltered.value.forEach((item) => {
    if (!catValues2.value.includes(item.cat)) {
      catValues2.value.push(item.cat);
    }
  });
};
onMounted(() => {
  getCat();
});
</script>

<template>
  <div class="flex flex-col justify-center items-center space-x-3 mt-2">
    <input
      placeholder="Search titles.."
      class="sm:w-1/4 w-2/4 input border-lime-400 border-opacity-50"
      v-model="searchText"
    />
    <div class="flex flex-row space-x-1 mt-2">
      <p
        class="rounded-xl bg-gray-900 px-3 py-0.5 text-gray-400 active:text-lime-400 cursor-pointer"
        v-for="cat in catValues2"
      >
        {{ cat }}
      </p>
    </div>
  </div>
  <div class="">
    <Transition>
      <div
        class="flex flex-col items-center mt-1"
        v-if="storeCommon.showAddNewCode"
      >
        <div
          class="bg-gray-900 bg-opacity-70 rounded-md flex flex-col flex-wrap items-center sm:w-1/2 p-4 space-y-2"
        >
          <div class="w-full flex justify-center sm:flex-row flex-col">
            <input
              type="text"
              placeholder="Title"
              class="border text-xl p-1 sm:w-2/5 bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 focus:outline-none focus:bg-gray-800"
              v-model="newTitle"
            />
            <select
              placeholder="Category"
              class="border bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 p-1 sm:ml-2 sm:w-1/6 focus:outline-none focus:bg-gray-800"
              v-model="newCat"
            >
              <option class="" v-for="choice in catSelector" selected>
                {{ choice }}
              </option>
            </select>
            <input
              type="text"
              placeholder="URL to docs.."
              class="border bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 p-1 sm:ml-2 sm:w-2/5 focus:outline-none focus:bg-gray-800"
              v-model="newHref"
            />
          </div>
          <div class="w-full flex justify-center sm:flex-row">
            <input
              type="text"
              placeholder="Description 1..."
              class="border bg-gray-900 placeholder:text-orange-400 placeholder:opacity-60 rounded-md sm:w-1/2 border-orange-400 border-opacity-40 p-1 ml-4 focus:outline-none focus:bg-gray-800"
              v-model="newDesc1"
            />
            <input
              type="text"
              placeholder="Code line 1..."
              class="border bg-gray-900 placeholder:text-orange-400 rounded-md sm:w-1/2 ml-2 border-orange-400 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newCode1"
            />
          </div>
          <div class="w-full flex justify-center flex-row">
            <input
              type="text"
              placeholder="Description 2..."
              class="border bg-gray-900 placeholder:text-orange-300 rounded-md w-1/2 placeholder:opacity-60 border-orange-300 border-opacity-40 p-1 ml-4 focus:outline-none focus:bg-gray-800"
              v-model="newDesc2"
            />
            <input
              type="text"
              placeholder="Code line 2..."
              class="border bg-gray-900 placeholder:text-orange-300 rounded-md w-1/2 ml-2 border-orange-300 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newCode2"
            />
          </div>
          <div class="w-full flex justify-center flex-row">
            <input
              type="text"
              placeholder="Description 3..."
              class="border bg-gray-900 placeholder:text-orange-200 rounded-md w-1/2 border-orange-200 border-opacity-40 p-1 ml-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newDesc3"
            />
            <input
              type="text"
              placeholder="Code line 3..."
              class="border bg-gray-900 placeholder:text-orange-200 rounded-md w-1/2 ml-2 border-orange-200 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newCode3"
            />
          </div>
          <div class="w-full flex justify-center flex-row">
            <input
              type="text"
              placeholder="Description 4..."
              class="border bg-gray-900 placeholder:text-orange-100 rounded-md w-1/2 border-orange-100 border-opacity-40 p-1 ml-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newDesc4"
            />

            <input
              type="text"
              placeholder="Code line 4..."
              class="border bg-gray-900 placeholder:text-orange-100 rounded-md w-1/2 ml-2 border-orange-100 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
              v-model="newCode4"
            />
          </div>
          <input
            type="text"
            placeholder="Array 1 goes here.."
            class="hidden border bg-gray-900 placeholder:text-fuchsia-200 rounded-md w-1/2 ml-2 border-fuchsia-200 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
            v-model="newArray1"
          />
          <div class="w-2/3 flex flex-row justify-between items-center">
            <div
              @click="addToFirestore()"
              class="p-0.5 rounded-md bg-gradient-to-r from-teal-200 to-lime-300"
            >
              <button
                class="hover:bg-gray-800 transition-all px-6 py-2 text-teal-500 bg-gray-900"
              >
                Add to site
              </button>
            </div>
            <button
              class="btn btn-xs btn-warning"
              disabled
              @click="showEditDelete = !showEditDelete"
            >
              Show delete
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <div class="p-2 sm:p-3 sm:pl-4">
      <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
        <div
          v-for="item in itemsFiltered"
          class="bg-slate-900 space-y-0.5 bg-opacity-60 p-5 sm:px-4 rounded-md xl:max-w-2xl md:max-w-4xl h-fit max-h-72 overflow-y-auto"
        >
          <div class="flex flex-row justify-between">
            <a
              :href="item.href"
              target="_blank"
              class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-red-400 to-yellow-200"
            >
              {{ item.title }}
            </a>
            <span class="text-xs text-lime-300">{{ item.cat }}</span>
          </div>
          <h3 v-if="item.desc1" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc1 }}
          </h3>
          <div class="flex flex-row flex-wrap w-full gap-2" v-if="item.array1">
            <span
              v-for="i in item.array1"
              @click="copyURL(i.srcbg)"
              class="flex flex-row text-cyan-700 sm:w-16 sm:h-8 rounded-md justify-center px-1"
              :class="i.srcbg"
              >{{ i.color }}</span
            >
          </div>

          <div class="rounded-md overflow-auto">
            <highlightjs
              @click="copyURL(item.code1)"
              class="text-sm"
              autodetect
              v-if="item.code1"
              :code="item.code1"
            />
          </div>

          <h3 v-if="item.desc2" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc2 }}
          </h3>
          <highlightjs
            @click="copyURL(item.code2)"
            class="text-sm"
            autodetect
            v-if="item.code2"
            :code="item.code2"
          />
          <h3 v-if="item.desc3" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc3 }}
          </h3>
          <highlightjs
            @click="copyURL(item.code3)"
            class="text-sm"
            autodetect
            v-if="item.code3"
            :code="item.code3"
          />
          <h3 v-if="item.desc4" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc4 }}
          </h3>
          <div class="grid grid-cols-2">
            <highlightjs
              @click="copyURL(item.code4)"
              class="text-sm"
              autodetect
              v-if="item.code4"
              :code="item.code4"
            />

            <svg
              v-if="showEditDelete"
              @click="storeSheet.deleteItem(item.id)"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trash-x justify-self-end place-self-end text-red-500 mb-1 -mr-2"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7h16"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              <path d="M10 12l4 4m0 -4l-4 4"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.hljs-string {
  background-color: rgba(red, green, blue);
}
</style>
