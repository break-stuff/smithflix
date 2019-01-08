<template>
    <div class="container">
        <div class="movie-poster">
            <a :href="movie.poster_path" target="_blank" rel="noopener noreferrer">
                <img class="movie-poster-tag" :src="movie.poster_path" :alt="movie.title + ' movie poster'">
            </a>
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
                <h5 class="genre-list">
                    <router-link :to="`/dashboard?genre=${genre.id}`" v-for="genre in movie.genres" :key="genre.id" class="badge badge-light genre">{{genre.name}}</router-link>
                </h5>
            </div>
            <br>
            <div class="movie-description">
                <h3>Overview:</h3>
                <p>{{ movie.overview }}</p> 
            </div>
            <br>
            <div class="price">
                <h3>Price:</h3>
                <p>{{movie.price | currency}}</p>
            </div>
            <div class="form-inline">
                <div class="form-group add-to-cart">
                    <label for="number-of-days">Number of days: </label>
                    <input class="form-control ml-1" type="number" v-model="daysCount" min="1" name="number-of-days" id="" />
                    <span class="ml-1"><strong><em>{{subtotal | currency}}</em></strong></span>
                </div>
            </div>
            <br>
            <button class="btn btn-primary" @click="addToCart">Add To Cart</button>
        </div>
    </div>
</template>

<script>
    import moviesUtil from '../utils/moviesUtil';
    import cartUtil from '../utils/cartUtil';
    import StarRating from '../components/StarRating';

    export default {
        name: 'MovieDetails',
        components: {
            StarRating,
        },
        computed: {
            movie() {
                return moviesUtil.getMovieById(parseInt(this.$route.params.id)); 
            },
            subtotal() {
                return this.movie.price * this.daysCount;
            }
        },
        data() {
            return {
                daysCount: 1
            };
        },
        methods: {
            addToCart() {
                cartUtil.addToCart(this.movie.id, parseInt(this.daysCount));
                console.log('cart', cartUtil.cartLines);
                console.log('cart 2', cartUtil.getCart());
            }
        }
    }
</script>
