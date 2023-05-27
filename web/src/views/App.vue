<template>
  <Sidebar
    :pages="pages"
    :selected-page-index="selectedPageIndex"
    :select-page-index="selectPageIndex"
  />
  <section id="app">
    <Dashboard v-if="selectedPageIndex === 0"/>
    <Profile v-else-if="selectedPageIndex === 1"/>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import Sidebar from "../components/Sidebar.vue";
  import Dashboard from "../components/app/dashboard/Dashboard.vue";
  import Profile from '../components/app/Profile.vue';

  const pages = [
    { title: "Dashboard", icon: "fa-cube", },
    { title: "Profile", icon: "fa-user", }
  ];

  const selectedPageIndex = ref(0)

  function selectPageIndex(index) {
    selectedPageIndex.value = index;
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
    margin-left: 6em;
    padding: 2em;
  }
</style>