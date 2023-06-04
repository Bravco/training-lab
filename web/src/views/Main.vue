<template>
    <Home v-if="getAuth().currentUser == null"/>
    <App v-else/>
</template>

<script setup>
    import { getAuth } from 'firebase/auth';
    import Home from './Home.vue';
    import App from './App.vue';
</script>