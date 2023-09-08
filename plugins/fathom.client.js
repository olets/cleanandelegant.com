import VueFathom from "@ubclaunchpad/vue-fathom";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: "CYXOSZDQ",
    settings: {
      spa: "history",
      url: "https://cdn.usefathom.com/script.js",
    },
  });
});
