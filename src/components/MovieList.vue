<template>
    <div class="movie-list">
        <movie-summary v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
</template>

<script>
    import MovieSummary from '../components/MovieSummary';

    export default {
        name: 'MovieList',
        props: [ 'movies' ],
        components: {
            MovieSummary
        },
        data() {
            return {
            }
        }
    }
</script>