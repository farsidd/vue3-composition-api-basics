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
  <!-- make the button change bg color when its odd -->
  <div class="counter">
    <button class="btn-increase" :class="{'green' : evenOrOdd == 'even','red' : evenOrOdd == 'odd'}" @click="increaseCounter">
      {{counterData.counter}}
    </button>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounter } from "@/use/useCounter";
const {counterData, increaseCounter, evenOrOdd} = useCounter()
</script>

<style scoped>
.counter {
  padding-top: 10px;
}
.btn-increase {
  width: 100%;
  height: 150px;
  font-size: 40px;
  background: black;
  color: white;
}
.green{
  background: green;
}
.red {
  background: red;
}
</style>