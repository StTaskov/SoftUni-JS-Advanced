const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

const { assert, expect } = require('chai');

describe('Should test cine work correctly!', function () {
    describe('Should test ShowMovies method work correctly!', function () {
        it('Happy case! We pass array with movies and expect movies!', function () {
            let movieArr = ['Fast and furious', 'SpiderMan', 'Batman', 'Hulk']

            expectedResult = 'Fast and furious, SpiderMan, Batman, Hulk'
            result = cinema.showMovies(movieArr)

            assert.equal(expectedResult, result)
        });

        it('We pass array with one movie and expect one movie!', function () {
            let movieArr = ['Fast and furious']

            expectedResult = 'Fast and furious'
            result = cinema.showMovies(movieArr)

            assert.equal(expectedResult, result)
        });
        
        it('Throw case! We pass array with emty array and expect to throw!', function () {
            let movieArr = []

            result = function () {cinema.showMovies(movieArr)}
            expectedResult = 'There are currently no movies to show.'

            expect(result).to.be.throw(expectedResult)
        });

    });

    describe('Should test TikcetPrice method work correctly!', function () {
        it("TODO …", function () {
            // TODO: …
        });
    });

    describe('Should test swapSeatsInHall method work correctly!', function () {
        it("TODO …", function () {
            // TODO: …
        });
    });

});
