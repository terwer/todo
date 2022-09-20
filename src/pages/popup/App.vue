<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
    popup
    <button @click="createPage">首页</button>
  </div>
  <HelloWorld msg="Vite + Vue"/>
</template>

<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '../../components/HelloWorld.vue'

function createPage() {
  // While we could have used `let url = "index.html"`, using runtime.getURL is a bit more robust as
  // it returns a full URL rather than just a path that Chrome needs to be resolved contextually at
  // runtime.
  // let url = chrome.runtime.getURL("index/index.html");
  let url = "index/index.html";
  // @ts-ignore
  if (typeof chrome.runtime != "undefined") {
    // @ts-ignore
    url = chrome.runtime.getURL("/index/index.html");
  }
  window.open(url)
  console.log(`Created tab`);
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
