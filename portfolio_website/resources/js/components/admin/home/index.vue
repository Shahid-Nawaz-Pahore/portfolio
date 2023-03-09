<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    const logout = ()=>{
        localStorage.removeItem('token')
        router.push('/')
    }
</script>
<template>
    <h1>i am from admin home dashbord</h1><hr>
    <div>
    <router-link to="not"> not founts</router-link>
        <br>
        <button @click="logout">Logout</button>
</div>
</template>
