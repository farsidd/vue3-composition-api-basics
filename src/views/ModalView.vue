<template>
    <div class="modalViewParent">
        <h3>Light/Dark Modal</h3>
        <div>
            <button @click="showModal = true">Show Modal</button>
            <input type="checkbox" v-model="darkMode">
        </div>
    </div>
    <component
    v-model="showModal" :is="darkMode ? darkModal : lightModal" title="Title From Parent To Child"
    >
    </component>
</template>

<script setup>
import { ref } from "vue";
import  lightModal from "@/components/lightModal.vue";
import  darkModal from "@/components/darkModal.vue";
const darkMode = ref(false)
const showModal = ref(false)

</script>

<style scoped>
.modalViewParent {
    padding-top: 10px;
    text-align: center;
}
</style>