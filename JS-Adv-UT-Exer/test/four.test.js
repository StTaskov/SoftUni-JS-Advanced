const mathEnforcer = require('../unittest/four.js');
const assert = require('chai').assert;

describe('mathEnforcer', function () {
    // Check addFive method
    describe('addFive', () => {
        // Should check if passed param is not number
            it('Should check if passed param is not a number', function () {
                let notNum = true;
                let expectedResult = undefined;

                let actualResult = mathEnforcer.addFive(notNum)

                assert.equal(expectedResult, actualResult)
            })
        // Should check if passed param is num , if it is return param + 5

    });

    // Check subractTen method
    describe('subtractTen', () => {

    });

    // Check sum method
    describe('sum'), () => {

    };
});