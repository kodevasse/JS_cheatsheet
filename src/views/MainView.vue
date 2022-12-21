<script setup>
import { ref, computed, reactive } from "vue";
import { useStoreSheet } from "@/stores/storeSheet";
import { useStoreCommon } from "@/stores/storeCommon";

const storeSheet = useStoreSheet();
const storeCommon = useStoreCommon();

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
const newCat = ref("");
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
</script>

<template>
  <div class="">
    <Transition>
      <div
        class="flex flex-col items-center mt-5"
        v-if="storeCommon.showAddNewCode"
      >
        <div
          class="bg-gray-900 bg-opacity-70 rounded-md flex flex-col flex-wrap items-center w-1/2 p-4 space-y-2"
        >
          <div class="w-full flex justify-center flex-row">
            <input
              type="text"
              placeholder="Title"
              class="border text-xl p-1 w-2/5 bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 focus:outline-none focus:bg-gray-800"
              v-model="newTitle"
            />
            <input
              type="text"
              placeholder="Category"
              class="border bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 p-1 ml-2 w-1/6 focus:outline-none focus:bg-gray-800"
              v-model="newCat"
            />
            <input
              type="text"
              placeholder="URL to docs.."
              class="border bg-gray-900 placeholder:text-teal-400 rounded-md border-gray-700 p-1 ml-2 w-2/5 focus:outline-none focus:bg-gray-800"
              v-model="newHref"
            />
          </div>
          <div class="w-full flex justify-center flex-row">
            <input
              type="text"
              placeholder="Description 1..."
              class="border bg-gray-900 placeholder:text-orange-400 placeholder:opacity-60 rounded-md w-1/2 border-orange-400 border-opacity-40 p-1 ml-4 focus:outline-none focus:bg-gray-800"
              v-model="newDesc1"
            />
            <input
              type="text"
              placeholder="Code line 1..."
              class="border bg-gray-900 placeholder:text-orange-400 rounded-md w-1/2 ml-2 border-orange-400 border-opacity-40 p-1 mr-4 placeholder:opacity-60 focus:outline-none focus:bg-gray-800"
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
            <button class="btn btn-success" @click="addToFirestore()">
              Add
            </button>
            <button
              class="btn btn-xs btn-warning"
              @click="showEditDelete = !showEditDelete"
            >
              Show delete
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <div class="p-2 sm:p-7">
      <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        <div
          v-for="item in items"
          class="bg-fuchsia-200 bg-opacity-5 p-1 sm:px-4 rounded-md max-w-3xl h-fit max-h-96 overflow-y-auto"
        >
          <a
            :href="item.href"
            target="_blank"
            class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-green-400 to-cyan-200"
          >
            {{ item.title }}
          </a>
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
          <h2
            @click="copyURL(item.code1)"
            v-if="item.code1"
            class="text-orange-400"
          >
            {{ item.code1 }}
          </h2>
          <h3 v-if="item.desc2" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc2 }}
          </h3>
          <h2
            @click="copyURL(item.code2)"
            v-if="item.code2"
            class="text-orange-300"
          >
            {{ item.code2 }}
          </h2>
          <h3 v-if="item.desc3" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc3 }}
          </h3>
          <h2
            @click="copyURL(item.code3)"
            v-if="item.code3"
            class="text-orange-200"
          >
            {{ item.code3 }}
          </h2>
          <h3 v-if="item.desc4" class="text-[0.8rem] italic text-gray-400">
            {{ item.desc4 }}
          </h3>
          <div class="grid grid-cols-2">
            <h2
              @click="copyURL(item.code4)"
              v-if="item.code4"
              class="text-orange-100"
            >
              {{ item.code4 }}
            </h2>
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
</style>
