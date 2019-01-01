<template>
    <div class="side-nav">
        <!-- Search -->
        <!-- Genres -->
        <div class="genres">
            <h5>Genres</h5>

            <div class="genre form-check" v-for="genre in genres" :key="genre.id">
                <input type="checkbox" class="form-check-input" v-model="selectedGenres" :value="genre.id" name="" :id="genre.id" /><label :for="genre.id" class="form-check-label">{{ genre.name }}</label>
            </div>
        </div>

        <!-- Favorites -->
        <div class="favorites">
            <h5>Favorites</h5>

            <router-link to="/dashboard/bookmarks"><i class="fas fa-bookmark"></i>Bookmarks</router-link>
            <router-link to="/dashboard/favorites"><i class="fas fa-heart"></i>Favorites</router-link>
        </div>

    </div>
</template>

<script>
    import genres from '../data/genres';

    export default {
        name: 'SideNav',
        data() {
            return {
                genres,
                selectedGenres: []
            }
        }
    }
</script>
