
<template>
  <div class="home">
    <h3 ref="headingRef">This is the title</h3>
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counterData.counter }}</span>
    <button @click="increaseCounter" class="btn">+</button>
    <p>The number is: {{evenOrOdd}}</p>
    <button @click="showNextTick" style="margin-top: 10px">Next Tick</button>
    <p id="nextTickDataId">{{nextTickData}}</p>
  </div>
</template>
//new recommended way to use setup with composition api
//new recommended way to use setup
<script setup>

import {ref, onMounted, nextTick} from 'vue';

//All code related to counter via composable
//First import composable

import { useCounter } from "@/use/useCounter";

const {counterData, increaseCounter, decreaseCounter, evenOrOdd} = useCounter()

//TEMPLATE REF CODE
//here we see how to use template refs we pass some ref to h3 tag in our template
const headingRef = ref(null)
onMounted(() => {
  console.log(headingRef.value.offsetWidth) //display how much space taking by h3 on window in px
})

//NEXT TICK CODE
const nextTickData = ref('old data')
const showNextTick = () => {
    nextTickData.value = 'new data'
    console.log(document.getElementById('nextTickDataId').textContent)
 nextTick(()=>{
    console.log("next tick inside code run now")
    console.log(document.getElementById('nextTickDataId').textContent)
  })
}

</script>
<style scoped>
.home {
  text-align: center;
  padding-top: 50px;

}
.btn,
span {
  font-size: 40px;
  margin: 5px;
}
</style>