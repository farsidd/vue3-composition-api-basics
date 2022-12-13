<script setup>
import {provide, reactive} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const userData = reactive({
  username: 'Farhan',
  status: 'active'
})
//providing this data to all the child components
provide('userData', userData)
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/modal">Modal</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
