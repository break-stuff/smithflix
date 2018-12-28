<template>
    <div class="card bg-dark text-white movie-summary">
        <img :src="movie.backdrop_path" class="card-img-top" :alt="movie.title + ' poster'">
        <div class="card-img-overlay">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text"><star-rating :rating="movie.vote_average" /></p>
        </div>
    </div>
</template>

<script>
import StarRating from './StarRating';
export default {
    name: "MovieSummary",
    props: ["movie"],
    components: {
        StarRating
    }
};
</script>