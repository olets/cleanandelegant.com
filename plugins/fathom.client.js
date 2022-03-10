import VueFathom from "@ubclaunchpad/vue-fathom";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: "CYXOSZDQ",
    settings: {
      spa: "history",
      url: "https://rewarding-tea.cleanandelegant.com/script.js",
    },
  });
});
