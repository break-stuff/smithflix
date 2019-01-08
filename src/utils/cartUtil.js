import movies from '../data/movies';

export default {
    cartLines: [],

    getCart() {
        return movies
            .filter(movie => this.cartLines.map(line => line.movieId).includes(movie.id))
            .map(movie => {
                return {
                    movieId: movie.id,
                    title: movie.title,
                    price: movie.price,
                    days: this.cartLines.find(x => x.movieId === movie.id).days
                };
            });
    },

    addToCart(movieId, days) {
        this.cartLines.push({
            movieId,
            days
        });
    },

    removeFromCart(movieId) {
        this.cartLines = this.cartLines.filter(x => x.movieId !== movieId);
    }
}
