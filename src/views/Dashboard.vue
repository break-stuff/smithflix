<template>
    <div class="dashboard">
        <h1 class="sr-only">This is the Dashboard page</h1>
        <movie-list :movies="movies" />
    </div>
</template>

<script>
    import movies from '../data/movies';
    import MovieList from '../components/MovieList';

    export default {
        name: 'DashBoard',
        components: {
            MovieList
        },
        data() {
            return {
                movies
            }
        }
    }
</script>

