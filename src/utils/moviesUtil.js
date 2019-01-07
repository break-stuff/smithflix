import movies from '../data/movies';
import genres from '../data/genres';

export default {
    searchFields: ['title', 'original_title', 'overview'],
    filteredMovies: [],

    filterMovies(filter) {
        this.filterByGenres(filter.genres);
        this.filterBySearchTerm(filter.searchTerm);
        this.sortMovies(filter.sortBy);

        return this.filteredMovies;
    },

    filterByGenres(genres) {
        this.filteredMovies = genres.length > 0 
            ? movies.filter(movie => {
                let isGenre = false

                genres.forEach(genre => {
                    if(movie.genre_ids.includes(genre))
                        isGenre = true;
                });

                return isGenre;
            }) 
            : movies;    
    },

    filterBySearchTerm(searchTerm) {
        if (!searchTerm) return;        

        let term = searchTerm.toString().toLowerCase();

        this.filteredMovies = this.filteredMovies.filter(movie => {
            let foundMovie = false
            this.searchFields.forEach(prop => {
                let value = movie[prop].toString().toLowerCase();
                if (value.includes(term))
                    foundMovie = true;
            });
            
            return foundMovie;
        });
    },

    sortMovies(sortProp) {
        return this.filteredMovies.sort((a, b) => {
            return sortProp === 'release_date' ? new Date(a[sortProp]) - new Date(b[sortProp]) : a[sortProp] - b[sortProp];
        });
    },

    getMovieById(id) {
        let movie = movies.find(movie => movie.id === id);

        if(movie)
            movie.genres = genres.filter(genre => movie.genre_ids.includes(genre.id));
        
        return movie;
    }
}