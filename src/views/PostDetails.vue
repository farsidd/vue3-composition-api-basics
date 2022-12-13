<template>
    <div>
        <!-- how you can access id directly -->
        <h3>selected id is: {{ $route.params.id }}</h3>
        <button @click="showId">Show Id</button>
        <button @click="goToPostOne">Go To Post 1</button>
        <button @click="goHomeIn3s">Go Home In 3 Seconfd</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"; //in comp api we have no access to this.$route.... so we have to import first from vue-router library
const route = useRoute()
const router = useRouter()

const goHomeIn3s = () => {
    setTimeout(() => {
        router.push({name: 'home'}) // You can give path directly like below
    }, 3000);
}
const goToPostOne = () => {
        router.push({name: 'postDetails', params: {id: 1}}) //You can give path as an object with named route and params
}
const showId = () => {
    alert(`The for the this post is: ${route.params.id}`)
}
</script>

<style  scoped>

</style>