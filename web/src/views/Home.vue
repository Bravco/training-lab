<template>
    <hero v-if="getAuth().currentUser == null"/>
    <App v-else/>
</template>

<script setup>
    import { getAuth } from 'firebase/auth';
    import Hero from './Hero.vue';
    import App from './App.vue';
</script>