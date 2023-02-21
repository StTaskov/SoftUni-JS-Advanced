const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

const { expect } = require('chai');

describe("Should test Company Administartion", function () {
    describe("Should test hiring employee", function () {
        it("Should test if position is not programing", function () {
            let name = 'Ivan'
            let postion = 'QA'
            let yearsExperience = 5

            expect(() => companyAdministration.hiringEmployee(name, postion, yearsExperience).to.be.throw('We are not looking for workers for this position.'))
        });
        it("Should test if position is not programing", function () {
            let name = 'Ivan'
            let postion = 'Metach'
            let yearsExperience = 5

            expect(() => companyAdministration.hiringEmployee(name, postion, yearsExperience).to.be.throw('We are not looking for workers for this position.'))
        });
        it("Should test if missing argument", function () {
            let name = 'Ivan'
            let yearsExperience = 5

            expect(() => companyAdministration.hiringEmployee(name, yearsExperience).to.be.throw('We are not looking for workers for this position.'))
        });
        it("Should test if missing argument", function () {
            let name = 'Ivan'
            let postion = 'QA'

            expect(() => companyAdministration.hiringEmployee(name, postion).to.be.throw('We are not looking for workers for this position.'))
        });
        it("Should test if missing argument", function () {
            let postion = 'QA'
            let yearsExperience = '5'

            expect(() => companyAdministration.hiringEmployee( postion, yearsExperience).to.be.throw('We are not looking for workers for this position.'))
        });
        it("Should test if years are less than 3", function () {
            let name = 'Ivan'
            let postion = 'Programmer'
            let yearsExperience = 2

            let result = `Ivan is not approved for this position.`;
            let expected = companyAdministration.hiringEmployee(name, postion, yearsExperience)

            expect(expected).to.be.equal(result)
        });
        it("Should test if years are less than 3", function () {
            let name = 'Ivan'
            let postion = 'Programmer'
            let yearsExperience = 0

            let result = `Ivan is not approved for this position.`;
            let expected = companyAdministration.hiringEmployee(name, postion, yearsExperience)

            expect(expected).to.be.equal(result)
        });
        it("Should test if years are  3", function () {
            let name = 'Ivan'
            let postion = 'Programmer'
            let yearsExperience = 3

            let result = `Ivan was successfully hired for the position Programmer.`;
            let expected = companyAdministration.hiringEmployee(name, postion, yearsExperience)

            expect(expected).to.be.equal(result)
        });
        it("Should test if years more than  3", function () {
            let name = 'Ivan'
            let postion = 'Programmer'
            let yearsExperience = 10

            let result = `Ivan was successfully hired for the position Programmer.`;
            let expected = companyAdministration.hiringEmployee(name, postion, yearsExperience)

            expect(expected).to.be.equal(result)
        });
    });
    describe("Should test calculate salary", function () {
        it("Should test if hours are not number", function () {
            let hours = -5
            expect(() => companyAdministration.calculateSalary(hours).to.be.throw('Invalid hours'))
        });
        it("Should test if hours are not number", function () {
            let hours = []
            expect(() => companyAdministration.calculateSalary(hours).to.be.throw('Invalid hours'))
        });
        it("Should test if hours are not number", function () {
            let hours = {}
            expect(() => companyAdministration.calculateSalary(hours).to.be.throw('Invalid hours'))
        });
        it("Should test if hours are not number", function () {
            let hours = 'five'
            expect(() => companyAdministration.calculateSalary(hours).to.be.throw('Invalid hours'))
        });
        it("Should test if hours are lees than zero and are not number", function () {
            let hours = 'minus five'
            expect(() => companyAdministration.calculateSalary(hours).to.be.throw('Invalid hours'))
        });
        it("Should test if hours are more than 160", function () {
            let hours = 180

            let result = 3700
            let expected = companyAdministration.calculateSalary(hours)

            expect(expected).to.be.equal(result)
        });
        it("Should test if hours are less than 160", function () {
            let hours = 140

            let result = 2100
            let expected = companyAdministration.calculateSalary(hours)

            expect(expected).to.be.equal(result)
        });
        it("Should test if hours are equal 160", function () {
            let hours = 160

            let result = 2400
            let expected = companyAdministration.calculateSalary(hours)

            expect(expected).to.be.equal(result)
        });
        it("Should test if hours are 0", function () {
            let hours = 0

            let result = 0
            let expected = companyAdministration.calculateSalary(hours)

            expect(expected).to.be.equal(result)
        });


    });
    describe("Should test firing employee", function () {
        it("Should test if names are not array", function () {
            let employees = 'ivan'
            let index = 0
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = '{}'
            let index = 0
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = '5'
            let index = 0
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = '5'
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = '5'
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = 5.5
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = 5
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if index is missing", function () {
            let employees = ["Petar", "Ivan", "George"]
            expect(() => companyAdministration.firedEmployee(employees).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = -5
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = 'five'
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test if names are not array", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = 3
            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))
        });
        it("Should test when we fire", function () {
            let employees = ["Petar", "Ivan", "George"]
            let index = 0

            const expected = 'Ivan, George'
            const result = companyAdministration.firedEmployee(employees, index)
            expect(expected).to.be.equal(result)
        });
        it("Should test when array is empty", function () {
            let employees = []
            let index = 0

            expect(() => companyAdministration.firedEmployee(employees, index).to.be.throw('Invalid input'))

        });
    });

});
