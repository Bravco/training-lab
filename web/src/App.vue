<template>
  <Navbar v-if="router.currentRoute.value.name != 'app'" :is-logged-in="isLoggedIn"/>
  <RouterView/>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { RouterView } from "vue-router";
  import router from "./router";
  
  import Navbar from "./components/Navbar.vue";

  const isLoggedIn = ref(false);

  let auth;

  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });
</script>