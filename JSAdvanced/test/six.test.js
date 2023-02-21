const rgbToHexColor = require('../unitetesting/six.js')
const assert = require('chai').assert

describe('Should test rgbToHexColor functionality', () => {
    it('Should test rgbToHexColor functionality where red is not correct', () => {
        let red = 'Pesho'
        let green = 15
        let blue = 135
        let expected = undefined

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })
    it('Should test rgbToHexColor functionality where green is not correct', () => {
        let red = 15
        let green = 'Pesho'
        let blue = 135
        let expected = undefined

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })
    it('Should test rgbToHexColor functionality where blue is not correct', () => {
        let red = 15
        let green = 135
        let blue = 'Pesho'
        let expected = undefined

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })
    it('Should test rgbToHexColor functionality where colors are not in range', () => {
        let red = 256
        let green = -3
        let blue = 300
        let expected = undefined

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })
    it('Should test rgbToHexColor functionality where colors are not in numbers  ', () => {
        let red = '15'
        let green = -3
        let blue = '300'
        let expected = undefined

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })

    it('Should test rgbToHexColor functionality where colors are correct', () => {
        let red = 145
        let green = 15
        let blue = 136
        let expected = '#910F88'

        let result = rgbToHexColor(red, green, blue)

        assert.equal(result, expected)
    })

})