<template>
  <Navbar/>
  <section id="hero">
    <div class="background"></div>
    <div class="content">
      <div class="text">
        <h1 class="content-header">Personal Workout Architect</h1>
        <p class="content-paragraph-alt">
          We help you to craft customized routines tailored to your goals. 
          Only then you can unleash your true fitness potential.
        </p>
      </div>
      <div class="cta">
        <RouterLink to="/auth" class="btn btn-main">
          CREATE PLAN <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </RouterLink>
        <RouterLink to="/auth" class="btn btn-alt">SIGN IN</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue";
</script>

<style scoped>
  #hero {
    display: flex;
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../img/hero.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: brightness(35%);
    z-index: -100;
  }

  .content {
    display: grid;
    gap: 1.5rem;
    margin-left: 5%;
  }

  .text {
    display: grid;
    gap: .5rem;
  }

  .cta {
    display: flex;
    gap: 2rem;
  }

  .btn {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: .75rem 1.25rem;
    border-radius: 2rem;
    letter-spacing: 1px;
  }

  .btn-main {
    background-color: var(--color-primary);
  }

  .btn-alt {
    border: 1px solid white;
  }
</style>