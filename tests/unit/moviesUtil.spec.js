import {
    expect
} from 'chai';
import moviesUtil from '../../src/utils/moviesUtil';
import movies from '../../src/data/movies';

describe('moviesUtil', () => {
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
});
