<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/app">App</RouterLink>
  </nav>
  <RouterView/>
</template>