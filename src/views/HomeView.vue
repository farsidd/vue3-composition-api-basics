
<template>
  <div class="home">
    <h3 ref="headingRef">This is the title</h3>
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counter }}</span>
    <button @click="increaseCounter" class="btn">+</button>
    <p>The number is: {{evenOrOdd}}</p>
    <button @click="showNextTick" style="margin-top: 10px">Next Tick</button>
    <p id="nextTickDataId">{{nextTickData}}</p>
  </div>
</template>
//new recommended way to use setup with composition api
//new recommended way to use setup
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
import {reactive, computed, watch, ref, onMounted, nextTick} from 'vue';
//simple reactive data property using ref
const refCount = ref(0)
//use data propery inside reactive object to grouped all related data properties related to specific functionality
const counterData = reactive({
  counter: 0,
  titleEvenOrOdd: ''
})
//functions
const counter = ref(0);
const increaseCounter = () => {
  counterData.counter++;
  counter.value++;
};
const decreaseCounter = () => {
  counterData.counter--;
  counter.value--;
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