<template>
    <div class="content">
        <h1 class="sr-only">Dashboard</h1>
        <side-nav :filter="movieFilter" />
        <movie-list :movies="filteredMovies" />
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
                movies,
                filteredMovies: [],
                movieFilter: {
                    genres: [],
                    search: ''
                }
            }
        },
        methods: {
            filterMovies() {
                this.filterByGenres();
                this.filterBySearchTerm();
            },

            filterByGenres() {
                this.filteredMovies = this.movieFilter.genres.length > 0 
                                        ? this.movies.filter(movie => {
                                            let isGenre = false
                                            this.movieFilter.genres.forEach(genre => {
                                                if(movie.genre_ids.includes(genre))
                                                    isGenre = true;
                                            });
                                            return isGenre;
                                        }) 
                                        : this.movies;
            },

            filterBySearchTerm() {

            }
        },
        watch: {
            movieFilter: {
                handler(newFilter, oldFilter) {
                    console.log('new filter', newFilter);
                    this.filterMovies();
                },
                deep:true
            }
        },
        created() {
            this.filterMovies();
        }
    }
</script>

