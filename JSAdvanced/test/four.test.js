const sum = require('../unitetesting/four.js')
const assert = require('chai').assert

describe('Should check sum functionality', () => {
    it ('Should check sum functionality with postive numbers', () => {
        // AAA
        //Arange
        let arr = [1, 2, 3, 4, 5]
        let expected = 15

        //Act
        let result = sum(arr)

        //Assert
        assert.equal(result, expected)
    })
    it ('Should check sum functionality with negative numbers', () => {
        // AAA
        // Arange
        let arr = [-1, -2, -3, -4, -5]
        let expected = -15

        //Act
        let result = sum(arr)

        //Assert
        assert.equal(result, expected)
    })
    it ('Should not sum', () => {
        let arr = [1, 2, 5]

        let result = sum(arr)

        assert.notEqual(result, [])
    })
})