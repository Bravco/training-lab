<template>
    <h1 class="content title">{{ title }}</h1>
    <hr>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: "Title",
        },
    });
</script>

<style scoped>
  @import url("../../css/appPage.css");
  
  .title {
    font-size: 1.6em;
    font-weight: 600;
  }
</style>