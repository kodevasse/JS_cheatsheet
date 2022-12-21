<script setup>
import { ref, computed } from "vue";
let str;
const items = [
  {
    title: "Vue Init",
    href: "https://vuejs.org/guide/introduction.html",
    cat: "Init",
    desc1: "",
    code1: "npm init vue@latest",
    code2: "",
  },
  {
    title: "Tailwind CSS Vue Vite",
    href: "https://tailwindcss.com/docs/guides/vite#vue",
    cat: "Init",
    desc1: "",
    code1: "npm install -D tailwindcss postcss autoprefixer",
    code2: "npx tailwindcss init -p",
    code3: `
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],`,
    code4: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
  },
  {
    title: "Daisy UI",
    href: "https://daisyui.com/docs/install/",
    cat: "Init",
    desc1: "",
    code1: "npm i daisyui",
    code2: `plugins: [require("daisyui")],`,
  },
  {
    title: "Firebase",
    href: "https://console.firebase.google.com/u/0/?utm_source=firebase.google.com&utm_medium=referral",
    cat: "Init",
    desc1: "",
    code1: `https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0`,
    code2: ``,
  },
  {
    title: "VueUse",
    href: "https://vueuse.org/guide/",
    cat: "Init",
    desc1: "",
    code1: "npm i @vueuse/core",
    code2: ``,
  },
  {
    title: "Promises",
    href: "https://github.com/metagrover/ES6-for-humans",
    cat: "JS",
    desc1: `ES6 has native support for promises. A promise is an object that is waiting for an asynchronous operation to complete, and when that operation completes, the promise is either fulfilled(resolved) or rejected.

The standard way to create a Promise is by using the new Promise() constructor which accepts a handler that is given two functions as parameters. The first handler (typically named resolve) is a function to call with the future value when it's ready; and the second handler (typically named reject) is a function to call to reject the Promise if it can't resolve the future value.`,
    desc2: `Every Promise has a method named then which takes a pair of callbacks. The first callback is called if the promise is resolved, while the second is called if the promise is rejected.`,
    desc3: `Returning a value from then callbacks will pass the value to the next then callback.`,
    desc4: `When returning a promise, the resolved value of the promise will get passed to the next callback to effectively chain them together. This is a simple technique to avoid "callback hell".`,
    code1: `const p = new Promise((resolve, reject) => {
    if (/* condition */) {
        resolve(/* value */);  // fulfilled successfully
    } else {
        reject(/* reason */);  // error, rejected
    }
});`,
    code2: `p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));`,
    code3: `const hello = new Promise((resolve, reject) => { resolve("Hello") });
 
hello.then((str) => '${str} World')
     .then((str) => '${str}!')
     .then((str) => console.log(str)) // Hello World!`,
    code4: `const p = new Promise((resolve, reject) => { resolve(1) });

const eventuallyAdd1 = (val) => new Promise((resolve, reject) => { resolve(val + 1) });

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => console.log(val)); // 3`,
  },
  {
    title: "7. Array and Object Destructuring",
    href: "https://github.com/metagrover/ES6-for-humans",
    cat: "JS",
    desc1: `Destructuring helps in avoiding the need for temp variables when dealing with object and arrays.`,

    desc2: ``,
    desc3: ``,
    code1: `function foo() {
    return [1, 2, 3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3`,
    code2: `function getCar() {
  return {
    make: 'Tesla',
    model: 'g95',
    metadata: {
      vin: '123abc',
      miles: '12000'
    }
  };
}

const {make, model} = getCar();
console.log(make, model); // Tesla g95

const {make, metadata: {miles}} = getCar();
console.log(make, miles); // Tesla 12000`,
    code3: ``,
    code4: ``,
  },
  {
    title: "Tailwind CSS colors",
    href: "https://tailwindcss.com/docs/background-color",
    cat: "TWcss",
    desc1: ``,

    desc2: ``,
    desc3: ``,
    array1: [
      { color: "neutral", srcbg: "bg-neutral-400", 200: "bg-neutral-200" },

      {
        color: "slate",
        srcbg: "bg-slate-400",
        srclight: "slate-200",
        srcdark: "slate-500",
      },
      { color: "red", srcbg: "bg-red-400" },
      { color: "yellow", srcbg: "bg-yellow-400" },
      { color: "emerald", srcbg: "bg-emerald-400" },
      { color: "gray", srcbg: "bg-gray-400" },
      { color: "orange", srcbg: "bg-orange-400" },
      { color: "amber", srcbg: "bg-amber-400" },
      { color: "blue", srcbg: "bg-blue-400" },
      { color: "green", srcbg: "bg-green-400" },
      { color: "lime", srcbg: "bg-lime-400" },
      { color: "teal", srcbg: "bg-teal-400" },
      { color: "cyan", srcbg: "bg-cyan-400" },
      { color: "purple", srcbg: "bg-purple-400" },
      { color: "pink", srcbg: "bg-pink-400" },
      { color: "rose", srcbg: "bg-rose-400" },
      { color: "fuchsia", srcbg: "bg-fuchsia-400" },
      { color: "stone", srcbg: "bg-stone-400" },
      { color: "indigo", srcbg: "bg-indigo-400" },
      { color: "sky", srcbg: "bg-sky-400" },
    ],
    code1: ``,
    code2: ``,
    code3: ``,
    code4: ``,
  },
];

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

const littleOn = true;
</script>

<template>
  <div class="p-2 sm:p-7">
    <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4 flex-wrap">
      <div
        v-for="item in items"
        class="bg-fuchsia-200 bg-opacity-5 p-1 sm:px-4 rounded-md"
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
        <h2
          @click="copyURL(item.code4)"
          v-if="item.code4"
          class="text-orange-100"
        >
          {{ item.code4 }}
        </h2>
      </div>
    </div>
  </div>
</template>
