<template>
  <Sidebar
    :pages="pages"
    :selected-page-index="selectedPageIndex"
    :select-page="selectPage"
  />
  <section id="app">
    
  </section>
</template>

<style scoped>
  section {
    margin-left: 6em;
  }
</style>

<script setup>
  import { ref } from 'vue';
  import Sidebar from "../components/Sidebar.vue";

  const pages = [
    { index: 0, title: "Dashboard", icon: "fa-cube", },
    { index: 1, title: "Profile", icon: "fa-user", }
  ];

  const selectedPageIndex = ref(0)

  function selectPage(index) {
    selectedPageIndex.value = index;
  }
</script>