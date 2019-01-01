<template>
    <div class="content">
        <h1 class="sr-only">Dashboard</h1>
        <side-nav></side-nav>
        <movie-list :movies="movies" />
    </div>
</template>

<script>
    import movies from '../data/movies';
    import MovieList from '../components/MovieList';
    import SideNav from '../components/SideNav';

    export default {
        name: 'Dashboard',
        components: {
            MovieList,
            SideNav
        },
        data() {
            return {
                movies
            }
        },
        methods: {
            test() {
                this.$route
            }
        }
    }
</script>

