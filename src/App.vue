<script setup>
import { provide, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useOnline, usePageLeave } from '@vueuse/core'
const userData = reactive({
  username: 'Farhan',
  status: 'active'
})
//providing this data to all the child components
provide('userData', userData)
//show online/offline status of user via vueuse lib of composable
const online = useOnline()
const isLeft = usePageLeave()
</script>

<template>
  <div class="status-online">
    <p style="font-weight: bold;">Status:</p>
    <span style="margin-left: 5px;" :style="{ color: online ? 'green' : 'red' }">
      {{ online ? 'Online' : 'Offline' }}
    </span>

  </div>
  <div>
    isLeft: {{isLeft}}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/home-2">Home With Composable</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/modal">Modal</RouterLink>
  </nav>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>
<style scoped>
.status-online {
  top: 0;
  right: 0;
  position: absolute;
  background: beige;
  display: flex;
}

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
