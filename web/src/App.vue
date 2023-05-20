<template>
  <Sidebar
    v-if="router.currentRoute.value.name == 'app'"
    :pages="pages"
    :selected-page-index="selectedPageIndex"
    :select-page="selectPage"
    :logout="logout"
  />
  <Navbar v-else :is-logged-in="isLoggedIn" :logout="logout"/>
  <RouterView/>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { RouterView } from "vue-router";
  import router from "./router";
  import Navbar from "./components/Navbar.vue";
  import Sidebar from "./components/Sidebar.vue";

  const pages = [
    {
      index: 0,
      title: "Dashboard",
      icon: "fa-cube",
    },
    {
      index: 1,
      title: "Profile",
      icon: "fa-user",
    }
  ];

  const isLoggedIn = ref(false);
  const selectedPageIndex = ref(0)

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

  function selectPage(index) {
    selectedPageIndex.value = index;
  }

  function logout() {
    signOut(auth).then(() => {
      router.push("/auth");
    });
  }
</script>