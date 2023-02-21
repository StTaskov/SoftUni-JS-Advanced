const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const { expect, assert } = require('chai')

describe('Should test library object work correctly!', function () {

    describe('Should test method calcPriceBook', function () {
        it('#Happy case!', function () {
            let nameOfBook = 'Roses name'
            let year = 2000

            expectedResult = `Price of Roses name is 20.00`
            result = library.calcPriceOfBook(nameOfBook, year)

            expect(expectedResult).to.be.equal(result)
        });

        it('Should test when we pass book with year before 1980!', function () {
            let nameOfBook = 'Roses name'
            let year = 1976

            expectedResult = `Price of Roses name is 10.00`
            result = library.calcPriceOfBook(nameOfBook, year)

            expect(expectedResult).to.be.equal(result)
        });

        it('Should test when we pass book with year 1980!', function () {
            let nameOfBook = 'Roses name'
            let year = 1980

            expectedResult = `Price of Roses name is 10.00`
            result = library.calcPriceOfBook(nameOfBook, year)

            expect(expectedResult).to.be.equal(result)
        });

        it('Should test when pass name wich is not string to throw!', function () {
            let nameOfBook = 300
            let year = 2000

            assert.throw(() => { library.calcPriceOfBook(nameOfBook, year), "Invalid input" })
        });

        it('Should test when pass year wich is not integer to throw!', function () {
            let nameOfBook = 'Roses name'
            let year = '2000'

            assert.throw(() => { library.calcPriceOfBook(nameOfBook, year), "Invalid input" })
        });

        it('Should test when pass year wich is float to throw!', function () {
            let nameOfBook = 'Roses name'
            let year = 200.50

            assert.throw(() => { library.calcPriceOfBook(nameOfBook, year), "Invalid input" })
        });
    });

    describe('Should test method findBook', function () {
        it('#Happy case', function () {
            let booksArr = ['Troy', 'Life style', 'Torronto']
            let desiredBook = 'Troy'

            let expectedResult = 'We found the book you want.'
            let result = library.findBook(booksArr, desiredBook)

            expect(expectedResult).to.be.equal(result)
        });

        it('Should throw when we pass book array which is empty', function () {
            let booksArr = []
            let desiredBook = 'Troy'

            assert.throw(() => { library.findBook(booksArr, desiredBook), 'No books currently available' })
        });

        it('Should test when we pass book which is not at library', function () {
            let booksArr = ['Troy', 'Life style', 'Torronto']
            let desiredBook = 'Roses name'

            let expectedResult = 'The book you are looking for is not here!'
            let result = library.findBook(booksArr, desiredBook)


            expect(expectedResult).to.be.equal(result)

        });
    });

    describe('Should test method arrangeTheBooks', function () {
        it('#Happy case!', function () {
            let countBooks = 40

            let expectResult = 'Great job, the books are arranged.'
            let result = library.arrangeTheBooks(countBooks)

            expect(expectResult).to.be.equal(result)
        });

        it('Should test when we pass invalid input which is under 0!', function () {
            let countBooks = -40

            assert.throw(() => { library.arrangeTheBooks(countBooks), 'Invalid input!' })
        });

        it('Should test when we pass invalid input which is float!', function () {
            let countBooks = 5.5

            assert.throw(() => { library.arrangeTheBooks(countBooks), 'Invalid input!' })
        });

        it('Should test when we pass invalid input which is somethig else!', function () {
            let countBooks = []

            assert.throw(() => { library.arrangeTheBooks(countBooks), 'Invalid input!' })
        });

        it('Should test when we pass invalid input which is float!', function () {
            let countBooks = 5.5

            assert.throw(() => { library.arrangeTheBooks(countBooks), 'Invalid input!' })
        });

        it('Should test when we pass valid input which is more than space!', function () {
            let countBooks = 150

            let expectResult = 'Insufficient space, more shelves need to be purchased.'
            let result = library.arrangeTheBooks(countBooks)

            expect(expectResult).to.be.equal(result)
        });


    });


});
