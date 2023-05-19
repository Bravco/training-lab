<template>
  <Sidebar v-if="router.currentRoute.value.name == 'app'"/>
  <Navbar v-else :is-logged-in="isLoggedIn" :handle-sign-out="handleSignOut"/>
  <RouterView/>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { RouterView } from "vue-router";
  import router from "./router";
  import Navbar from "./components/Navbar.vue";
  import Sidebar from "./components/Sidebar.vue";

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

  function handleSignOut() {
    signOut(auth).then(() => {
      router.push("/");
    });
  }
</script>