<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/" exact>Smithflix</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <!-- Left Links -->
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" to="/dashboard">Dashboard</router-link>
                </div>

                <!-- Right Links -->
                <div class="navbar-nav ml-auto">
                    <router-link class="nav-item nav-link" to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Clear Storage</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view class="page" />
    </div>
</template>
<script>
import localStorageUtil from './utils/localStorageUtil';
export default {
    name: 'App',
    methods: {
        clearData() {
            localStorageUtil.clear();
        }
    }
}
</script>

