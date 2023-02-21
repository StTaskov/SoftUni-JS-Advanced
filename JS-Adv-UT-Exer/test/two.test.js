const isOddOrEven = require('../unittest/two')
const assert = require('chai').assert

describe('Should check function isOddOrEven', () => {
    //When passed arguments is not string, expected undefined
    it('Should check when is passed not string', () => {
        let notString = 5;
        let expectedResult = undefined;
        
        let actualResult = isOddOrEven(notString);

        assert.equal(actualResult, expectedResult);
    })
    // When passsed arguments is string with even length, expected "even"
    it('Should check when is passed string with even length', () => {
        let string = 'Helloo';
        let expectedResult = 'even';

        let actualResult = isOddOrEven(string)

        assert.equal(actualResult, expectedResult);
    })
    // When passed arguments is string with odd length, expected "odd"
    it('Should check when is passed string with odd length', () => {
        let string = 'Hello';
        let expectedResult = 'odd';

        let actualResult = isOddOrEven(string);

        assert.equal(actualResult, expectedResult);
    })

    // When passed multyple arguments 
    it('Should check when are passed more than one string', () => {
        let string1 = 'Hello';
        let string2 = 'Helloo';
        let notString = 5
        let expectedResult = 'odd'
        
        let actualResult = isOddOrEven(string1, string2, notString)

        assert.equal(actualResult, expectedResult);
    })
})