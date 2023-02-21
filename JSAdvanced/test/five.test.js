const isSymmetric = require('../unitetesting/five.js')
const assert = require('chai').assert

describe('Should test functionality of isSymmetric', () => {
    it('Should test functionality of isSymmetric when pass not an array', () => {
        let passed = false
        let expected = false

        let result = isSymmetric(passed)

        assert.equal(result, expected)
    })

    it('Should test functionality of isSymmetric when symetrick array', () => {
    let passed = [1, 2, 3, 2, 1]

    let result = isSymmetric(passed)

    assert.deepEqual(result, true)
    })

    it('Should test functionality of isSymmetric when not symmetric array is passed', () => {
        let passed = [3, 2, 1, 2, 1]

        let result = isSymmetric(passed)

        assert.equal(result, false)
    })

    it('Should test functionality of isSymmetric when symetric arr with stings are passed', () => {
        let passed = ['Ivan', 'Peter', 'Ivan']

        let result = isSymmetric(passed)

        assert.equal(result, true)
    })

    it('Should test functionality of isSymmetric when not symetric arr with stings are passed', () => {
        let passed = ['Ivan', 'Peter', 'Ivan' , 'Peter']

        let result = isSymmetric(passed)

        assert.equal(result, false)
    })

    it('Should test functionality of isSymmetric when not symetric arr with stings are passed', () => {
        let passed = [1, 2, '1']

        let result = isSymmetric(passed)

        assert.equal(result, false)
    })
})
