<template>
    <div class="search-box">
        <label for="search-input" class="sr-only">Search</label>
        <input type="search" class="search-input form-control" placeholder="Search" v-model="movieFilter.searchTerm" />
        <span class="search-icons">
            <a href="javascript:void(0);" class="search-clear" v-if="movieFilter.searchTerm" @click="clearSearch()">
                <span class="sr-only">clear search</span>
                &times;
            </a>
            <i class="fas fa-search search-icon"></i>
        </span>   
    </div>
</template>

<script>
    export default {
        name: 'SearchBox',
        props: [ 'movieFilter' ],
        data() {
            return {
            }
        },
        methods: {
            clearSearch() {
                this.movieFilter.searchTerm = '';
            }
        }
    }
</script>
