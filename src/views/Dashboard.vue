<template>
    <div class="content">
        <h1 class="sr-only">Dashboard</h1>
        <side-nav :movie-filter="movieFilter" />
        <movie-list :movies="filteredMovies" />
    </div>
</template>

<script>
    import movies from '../data/movies';
    import MovieList from '../components/MovieList';
    import SideNav from '../components/SideNav';
    import moviesUtils from '../utils/moviesUtil';

    export default {
        name: 'Dashboard',
        components: {
            MovieList,
            SideNav
        },
        data() {
            return {
                movies,
                filteredMovies: [],
                movieFilter: {
                    genres: [],
                    searchTerm: '',
                    sortBy: 'title'
                }
            }
        },
        methods: { },
        watch: {
            movieFilter: {
                handler(newFilter, oldFilter) {
                    this.filteredMovies = moviesUtils.filterMovies(newFilter);
                },
                deep:true
            }
        },
        created() {
            if(this.$route.query.genre)
                this.movieFilter.genres.push(parseInt(this.$route.query.genre));

            this.filteredMovies = moviesUtils.filterMovies(this.movieFilter);
        }
    }
</script>

