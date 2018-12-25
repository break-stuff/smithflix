<template>
    <div class="home">
        <div class="lead">
            <h1>Smithflix</h1>
            <h2>A Simple Vue.js Demo</h2>
            <h3>Check out the amazing things you can do with Vue.js!</h3>
            <br>
            <router-link class="btn btn-primary btn-lg" to="/dashboard">
                Try The Demo <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {}
};
</script>
