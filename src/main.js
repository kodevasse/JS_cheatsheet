import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// hightligh vue3

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage("javascript", javascript);
// main css
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(hljsVuePlugin);
app.use(router);

app.mount("#app");
