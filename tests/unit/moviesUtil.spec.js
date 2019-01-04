import {
    expect
} from 'chai';
import moviesUtil from '../../src/utils/moviesUtil';
import movies from '../../src/data/movies';

describe('moviesUtil', () => {
    beforeEach(() => {
        resetFilter();
    });

    describe('filterByGenres', () => {
        it('should return 100 movies when no genres are added', () => {
            // Arrange
            let genres = [];

            // Act
            moviesUtil.filterByGenres(genres);

            // Assert
            expect(moviesUtil.filteredMovies.length).to.equal(100);
        });

        it('should return 45 movies when genre 28 (Action) is selected', () => {
            // Arrange
            let genres = [28];

            // Act
            moviesUtil.filterByGenres(genres);

            // Assert
            expect(moviesUtil.filteredMovies.length).to.equal(45);
        });

        it('should return 60 movies when genres 28 (Action) and 12 (Adventure) are selected', () => {
            // Arrange
            let genres = [28, 12];

            // Act
            moviesUtil.filterByGenres(genres);

            // Assert
            expect(moviesUtil.filteredMovies.length).to.equal(60);
        });
    });

    describe('filterBySearchTerm', () => {
        it('should return 100 movies when searchTerm is empty', () => {
            // Arrange
            let searchTerm = '';

            // Act
            moviesUtil.filterBySearchTerm(searchTerm);

            // Assert
            expect(moviesUtil.filteredMovies.length).to.equal(100);
        });

        it('should return 1 movie when searchTerm is "Aquaman"', () => {
            // Arrange
            let searchTerm = 'Aquaman';

            // Act
            moviesUtil.filterBySearchTerm(searchTerm);            

            // Assert
            expect(moviesUtil.filteredMovies.length).to.equal(1);
        });
    });

    describe('filterMovies', () => {
        it('should return 100 movies when no genres are selected and searchTerm is empty', () => {
            // Arrange
            let filter = {
                searchTerm: '',
                genres: []
            };

            // Act
            let filteredMovies = moviesUtil.filterMovies(filter);

            // Assert
            expect(filteredMovies.length).to.equal(100);
        });
        
        it('should return 2 movies when genre 878 is selected and searchTerm is "woman"', () => {
            // Arrange
            let filter = {
                searchTerm: 'woman',
                genres: [878]
            };

            // Act
            let filteredMovies = moviesUtil.filterMovies(filter);

            // Assert
            expect(filteredMovies.length).to.equal(2);
        });
    });
});

function resetFilter() {
    let filter = {
        searchTerm: '',
        genres: []
    };

    moviesUtil.filterMovies(filter);          
};