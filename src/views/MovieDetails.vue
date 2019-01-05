<template>
    <div class="container">
        <div class="movie-poster">
            <img class="movie-poster-tag" :src="movie.poster_path" :alt="movie.title + ' movie poster'">
        </div>
        <div class="movie-overview">
            <h1 class="title">{{ movie.title }} <i class="alt-title" v-if="movie.title !== movie.original_title">aka - {{ movie.original_title }}</i></h1>
            <hr>
            <div class="released">
                <h3>Release Date:</h3>
                {{ movie.release_date | longDate }}
            </div>
            <br>
            <div class="score">
                <h3>Audience Score:</h3>  
                <star-rating :rating="movie.vote_average" />
            </div>
            <br>
            <div class="genres">
                <h3>Genres</h3>
                <h4 class="genre-list">
                    <router-link :to="`/dashboard?genre=${genre.id}`" v-for="genre in movie.genres" :key="genre.id" class="badge badge-light genre">{{genre.name}}</router-link>
                </h4>
            </div>
            <br>
            <div class="movie-description">
                <h3>Overview:</h3>
                <p>{{ movie.overview }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
    import moviesUtil from '../utils/moviesUtil';
    import StarRating from '../components/StarRating';

    export default {
        name: 'MovieDetails',
        components: {
            StarRating
        },
        computed: {
            movie() {
                return moviesUtil.getMovieById(parseInt(this.$route.params.id)); 
            }
        }
    }
</script>
