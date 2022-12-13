<template>
    <div v-if="modelValue" class="modal-dark">
        <h3>{{title}}</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora accusantium sed et iusto, fugit molestias
            quaerat neque assumenda. Eligendi molestias accusantium reprehenderit aliquid totam error esse harum vero ut
            in!
        </p>
        <button @click="$emit('update:modelValue')">Hide Modal</button>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No Content'
    }
})
</script>

<style scoped>
.modal-dark {
    background: #333;
    color: white;
}
</style>