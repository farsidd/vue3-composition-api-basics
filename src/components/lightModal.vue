<template>
    <div v-if="modelValue" class="modal-light">
        <h3>{{title}}</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora accusantium sed et iusto, fugit molestias
            quaerat neque assumenda. Eligendi molestias accusantium reprehenderit aliquid totam error esse harum vero ut
            in!
        </p>
        <button @click="$emit('update:modelValue')">Hide Modal</button>
        <div>
          <p>Username is: {{userData.username}} & Status is: {{userData.status}}</p>  
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
//fetching global available data which | compoents came under app.vue
const userData = inject('userData')
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
.modal-light {
    background: whitesmoke;
}
</style>