let lookupChar = require('../unittest/three');
let assert = require('chai').assert;

describe('Should check functio lookUpChar', function () {
    // Should check that first passed parameter is a string, if not undefined
        it('Should check if first passed parameter is not a string', function () {
            let string = 5;
            let index = 5;
            let expectedResult = undefined;

            let actualResult = lookupChar(string, index);

            assert.equal(expectedResult, actualResult);
        });

    // Should check that second passed parameter is number, if not undefined
        it('Should check if second passed parameter is not number', () => {
            let string = 'Hello';
            let index = '3';
            let expectedResult = undefined;

            let actualResult = lookupChar(string, index);

            assert.equal(expectedResult, actualResult);
        });
    
    // Should check that value of second passed parameter, if index is float
        it('Should chech value of second passed parameter', () => {
            let string = 'Hello';
            let index = 5.5;
            let expectedResult = undefined;
    
            let actualResult = lookupChar(string, index);
    
            assert.equal(expectedResult, actualResult);
    
        });

    // Should check that value of second passed parameter, if str.len < index
        it('Should chech value of second passed parameter', () => {
            let string = 'Hello';
            let index = 8;
            let expectedResult = 'Incorrect index';

            let actualResult = lookupChar(string, index);

            assert.equal(expectedResult, actualResult);

        });
    
    // Should check that value of second passed parameter, if str.len == index
        it('Should chech value of second passed parameter', () => {
            let string = 'Hello';
            let index = 5;
            let expectedResult = 'Incorrect index';

            let actualResult = lookupChar(string, index);

            assert.equal(expectedResult, actualResult);

        });   

    // Should check that value of second passed parameter, if index < 0
    it('Should chech value of second passed parameter', () => {
        let string = 'Hello';
        let index = -6;
        let expectedResult = 'Incorrect index';

        let actualResult = lookupChar(string, index);

        assert.equal(expectedResult, actualResult);

    })
 
    // Should check if both parameters are OK, return char
    it('Should check return index', () => {
        let string = 'Hello';
        let index = 2;
        let expectedResult = 'l';

        let actualResult = lookupChar(string, index);

        assert.equal(expectedResult, actualResult);
    })
});