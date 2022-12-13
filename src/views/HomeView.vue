<template>
  <div class="home">
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaseCounter" class="btn">+</button>
  </div>
</template>
//new recommended way to use setup
<script setup>
import { ref } from "vue";
const counter = ref(0);
const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
</script>

<style>
.home {
  text-align: center;
  padding-top: 50px;
}
.btn,
span {
  font-size: 40px;
  margin: 10px;
}
</style>
