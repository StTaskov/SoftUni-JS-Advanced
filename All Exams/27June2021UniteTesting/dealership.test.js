let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

const { expect } = require('chai');

describe('Should test dealership code', function () {
    describe('Should test newcCarCost func', () => {

        it('Should test when you return other car', () => {
            let oldCarModel = 'Audi'
            let newCarPrice = 2000

            let result = dealership.newCarCost(oldCarModel, newCarPrice)

            expect(result).to.be.equal(newCarPrice)
        });

        it('Should test we return old car', () => {
            let oldCarModel = 'Audi A4 B8'
            let newCarPrice = 20000

            let expected = 5000
            let result = dealership.newCarCost(oldCarModel, newCarPrice)

            expect(result).to.be.equal(expected)
        });


        it('Should test we return old car but price is float number', () => {
            let oldCarModel = 'Audi A4 B8'
            let newCarPrice = 20000.50

            let expected = 5000.50
            let result = dealership.newCarCost(oldCarModel, newCarPrice)

            expect(result).to.be.equal(expected)
        });



    });

    describe('Should test carEquipment func', () => {
        // When we ask for one extra
        it('Should test when in index array we have one index', () => {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
            let indexArr = [0]

            let result = dealership.carEquipment(extrasArr, indexArr)
            let expected = [ 'heated seats' ]

            expect(result).to.be.equal(expected)
        })

    });
    // When we ask for more than one extra
    it('Should test when in index array we have two index', () => {
        let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
        let indexArr = [0, 2]

        let result = dealership.carEquipment(extrasArr, indexArr)
        let expected = result

        expect(result).to.be.equal(expected)
    })

    // When we doesnt ask extras
    it('Should test when in index array we doesnt gave extras', () => {
        let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
        let indexArr = []

        let result = dealership.carEquipment(extrasArr, indexArr)
        let expected = result

        expect(result).to.be.equal(expected)
    })

    describe('Should test euroCategory func', () => {
        // Should check if category is bellow 4
        it(' Should check if category is bellow 4', () => {
            let category = 2

            let result = dealership.euroCategory(category)
            let expected = 'Your euro category is low, so there is no discount from the final price!'

            expect(result).to.be.equal(expected)
        })
        // Should check if category is more 4
        it(' Should check if category is more than 4', () => {
            let category = 5

            let result = dealership.euroCategory(category)
            let expected = `We have added 5% discount to the final price: ${14250}.`

            expect(result).to.be.equal(expected)
        })
        // Should check if category is 0
        it(' Should check if category is equal to 0', () => {
            let category = 0

            let result = dealership.euroCategory(category)
            let expected = 'Your euro category is low, so there is no discount from the final price!'

            expect(result).to.be.equal(expected)
        })
        //Should check if category is string
        it(' Should check if category is equal to "four"', () => {
            let category = "four"

            let result = dealership.euroCategory(category)
            let expected = 'Your euro category is low, so there is no discount from the final price!'

            expect(result).to.be.equal(expected)
        })
    });

});