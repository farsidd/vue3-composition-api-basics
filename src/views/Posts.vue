<template>
  <div class="post">
    <h1>All Posts</h1>
    <!-- <textarea v-autofocus name="test" id="" cols="30" rows="10"></textarea>
     -->
     <ul>
      <li>
        <router-link :to="{name: 'postDetails', params: {id: '1'}}">Post 1</router-link>
      </li>
      <li>
        <router-link :to="{name: 'postDetails', params: {id: '2'}}">Post 1</router-link>
      </li>
     </ul>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/directives/vAutofocus";
</script>