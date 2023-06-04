<template>
  <Navbar/>
  <section id="auth">
    <div v-if="forgotPassword">
      <ForgotPassword :onForgotPasswordToggleClick="toggleForgotPassword"/>
    </div>

    <div v-else>
      <SignUp v-if="signUp" :onAuthToggleClick="toggleAuth"/>
      <SignIn v-else :onAuthToggleClick="toggleAuth" :onForgotPasswordToggleClick="toggleForgotPassword"/>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import Navbar from "../components/Navbar.vue";
  import SignUp from '../components/auth/SignUp.vue';
  import SignIn from '../components/auth/SignIn.vue';
  import ForgotPassword from "../components/auth/ForgotPassword.vue";
  
  const signUp = ref(false);
  const forgotPassword = ref(false);

  function toggleAuth() {
    signUp.value = !signUp.value;
  };

  function toggleForgotPassword() {
    forgotPassword.value = !forgotPassword.value;
  }
</script>