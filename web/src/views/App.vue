<template>
  <Sidebar
    :pages="pages"
    :selected-page-index="selectedPageIndex"
    :select-page-index="selectPageIndex"
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
    { title: "Dashboard", icon: "fa-cube", },
    { title: "Profile", icon: "fa-user", }
  ];

  const selectedPageIndex = ref(0)

  function selectPageIndex(index) {
    selectedPageIndex.value = index;
  }
</script>