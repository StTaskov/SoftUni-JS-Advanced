const createCalculator = require('../unitetesting/seven')
const assert = require('chai').assert

describe('Shoud rest createCalculator functionality', () => {
    it('Should return an object', () => {
        let expected = typeof(createCalculator())
        let result = typeof(createCalculator())
        assert.equal(result, expected)
    })
    it('Should return an object with props', () => {
        let expected = 1
        let object = createCalculator()
        let result = object.add(1)
        assert.equal(result, expected)
    })
})
