<template>
  <div class="home">
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counterData.counter }}</span>
    <button @click="increaseCounter" class="btn">+</button>
    <p>The number is: {{evenOrOdd}}</p>
  </div>
</template>
//new recommended way to use setup with composition api
<script setup>

//way 1 by using ref to make data reactive

// import { ref } from "vue";
// const counter = ref(0);
// const increaseCounter = () => {
//   counter.value++;
// };
// const decreaseCounter = () => {
//   counter.value--;
// };

//way 2 by using reactive object so we can gather all the data variables specific to some functionality
import {reactive, computed, watch, ref} from 'vue';
const refCount = ref(0)
const counterData = reactive({
  counter: 0,
  titleEvenOrOdd: ''
})
//functions
const increaseCounter = () => {
  counterData.counter++;
};
const decreaseCounter = () => {
  counterData.counter--;
};
//computed proerties | modify data in some fashion and return
const evenOrOdd = computed(() => {
  if(counterData.counter % 2 === 0) return 'even'
  return 'odd'
})
//watchers | coninuous watch some data propery & do something when values matches to something
//we will fire an alert when counter value exceeds to 20

//how you use watch on ref value
watch(refCount, (newrefCount,prerefCount) => {
  console.log('old value is: ' + prerefCount)
  if(newrefCount == 20) {
    alert('value exceeds 20')
  }
})
//how to use watcher on reactive object data properties like above
watch(() => counterData.counter, (newCounterValue) => {
  if(newCounterValue == 10) {
    alert('ten')
  }
})
</script>

//old way to use setup with composition api
<!-- <script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0)
    const increaseCounter = () => {
      counter.value++;
    };
    const decreaseCounter = () => {
      counter.value--;
    };
    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script> -->
//options api way
<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script> -->

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
