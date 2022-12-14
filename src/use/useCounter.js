import {reactive, computed, watch, ref} from 'vue';

//if you want data of the composable remain in sync then place data outside the function
// const counterData = reactive({
//   counter: 0,
//   titleEvenOrOdd: ''
// })
export function useCounter() {

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
  // counter.value++;
};
const decreaseCounter = () => {
  counterData.counter--;
  // counter.value--;
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

return {
    counterData, increaseCounter, decreaseCounter, evenOrOdd
}
}