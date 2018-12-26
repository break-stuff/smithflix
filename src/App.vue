<template>
    <div id="app">
        <main-menu />        
        <router-view class="page" />
    </div>
</template>
<script>
// import localStorageUtil from '@/utils/localStorageUtil';
import MainMenu from '@/components/MainMenu';

export default {
    name: 'App',
    components: {
        MainMenu
    }
}
</script>

