class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () {
            return id++;
        }
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    }

    getId(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this._validate(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    _validate(entity) {
        //Validate existing property
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        //Validate property type
        for (let propName in entity) {
            let val = entity[propName];
            if (typeof val !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }
}

module.exports = { Repository };

// // Initialize props object
// let properties = {
//     name: "string",
//     age: "number",
//     birthday: "object"
// };
// //Initialize the repository
// let repository = new Repository(properties);

// // Add two entities
// let entity = {
//     name: "Pesho",
//     age: 22,
//     birthday: new Date(1998, 0, 7)
// };
// repository.add(entity); // Returns 0
// repository.add(entity); // Returns 1
// console.log(repository.getId(0));
// // {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
// console.log(repository.getId(1));
// // {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
// //Update an entity
// entity = {
//     name: 'Gosho',
//     age: 22,
//     birthday: new Date(1998, 0, 7)
// };
// repository.update(1, entity);
// console.log(repository.getId(1));
// // {"name":"Gosho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
// // Delete an entity
// repository.del(0);
// console.log(repository.count); // Returns 1
// let anotherEntity = {
//     name1: 'Stamat',
//     age: 29,
//     birthday: new Date(1991, 0, 21)
// };
// // repository.add(anotherEntity); // should throw an Error
// anotherEntity = {
//     name: 'Stamat',
//     age: 29,
//     birthday: 1991
// };
// // repository.add(anotherEntity); // should throw a TypeError
// // repository.del(-1); // should throw Error for invalid id


const { expect } = require('chai')

describe('Should test reporsitory function!', () => {
    describe('Should test constructor!', () => {

        it('Should test constructor properties!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            expectedResult = { name: "string", age: "number", birthday: "object" }
            result = repository.props

            expect(result.name).to.be.equal(expectedResult['name'])
            expect(result.age).to.be.equal(expectedResult['age'])
            expect(result.birthday).to.be.equal(expectedResult['birthday'])
            expect(result).to.be.eql(expectedResult)
        });
        it('Should test constructor data!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            expectedResult = new Map()
            result = repository.data

            expect(expectedResult).to.be.eql(result)
        });
        it('Should test constructor id!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            expectedResult = 0
            result = repository.nextId()

            expect(expectedResult).to.be.equal(result)
        });
    });

    describe('Should test getter!', function () {
        it("Should test getter with empty map!", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            expectedResult = 0
            result = repository.data.size

            expect(expectedResult).to.be.equal(result)
        });
    });

    describe('Should test add method!', function () {
        it('Should test add method work correctly with person entity!', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 23,
                birthday: new Date(1944, 5, 7)
            }
            expectedResult = 0
            result = repository.add(entity)

            expect(expectedResult).to.be.equal(result)
        });
        it('Should test add method throw error with person entity without name!', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                age: 23,
                birthday: new Date(1944, 5, 7)
            }


            expect(() => repository.add(entity)).to.be.throw("Property name is missing from the entity!")
        });

        it('Should test add method throw error with person entity without age!', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                birthday: new Date(1944, 5, 7)
            }


            expect(() => repository.add(entity)).to.be.throw("Property age is missing from the entity!")
        });

        it('Should test add method throw error with person entity without birthday date!', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 23
            }


            expect(() => repository.add(entity)).to.be.throw("Property birthday is missing from the entity!")
        });

        it('Shoudl test if add methor throw a type error with person entyty with invalid name!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: ["Pesho"],
                age: 23,
                birthday: new Date(1944, 5, 7)
            }

            expect(() => repository.add(entity)).to.be.throw("Property name is not of correct type!")
        })

        it('Shoudl test if add methor throw a type error with person entity with invalid age!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: '23',
                birthday: new Date(1944, 5, 7)
            }

            expect(() => repository.add(entity)).to.be.throw("Property age is not of correct type!")
        })

        it('Shoudl test if add methor throw a type error with person entity with invalid birthday!', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            //Initialize the repository
            const repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 23,
                birthday: '07.05.1944'
            }

            expect(() => repository.add(entity)).to.be.throw("Property birthday is not of correct type!")
        })

        describe('Should test getId method!', function () {
            it("Should test if getId mehod work correctly!", function () {
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                //Initialize the repository
                const repository = new Repository(properties);

                let entity = {
                    name: 'Pesho',
                    age: 23,
                    birthday: new Date(1944, 5, 7)
                }
                repository.add(entity)
                expectedResult = { name: 'Pesho', age: 23, birthday: new Date(1944, 5, 7) }
                result = repository.getId(0)

                expect(expectedResult).to.be.eql(result)
            });
        });

        describe('Should test update method!', function () {
            it("Should test if update method work correctly!", function () {
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                //Initialize the repository
                const repository = new Repository(properties);

                let entity = {
                    name: 'Pesho',
                    age: 23,
                    birthday: new Date(1944, 5, 7)
                }
                let entity1 = {
                    name: 'Gosho',
                    age: 15,
                    birthday: new Date(1945, 5, 7)
                }
                repository.add(entity)
                repository.update(0, entity1)
                expectedResult = repository.data.get(0)
                expect(expectedResult).to.be.eql(entity1)
            });
            it("Should test if update method doenst work correctly!", function () {
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                //Initialize the repository
                const repository = new Repository(properties);

                let entity = {
                    name: 'Pesho',
                    age: 23,
                    birthday: new Date(1944, 5, 7)
                }
                let entity1 = {
                    name: 'Gosho',
                    age: 15,
                    birthday: new Date(1945, 5, 7)
                }
                repository.add(entity)
                result = () => { repository.update(5, entity1) }
                expect(result).to.throw("Entity with id: 5 does not exist!")
            });
        });

        describe('Should test dell method!', function () {
            it("Should test if method work correctly!", function () {
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                //Initialize the repository
                const repository = new Repository(properties);

                let entity = {
                    name: 'Pesho',
                    age: 23,
                    birthday: new Date(1944, 5, 7)
                }
                repository.add(entity)

                repository.del(0)
                expectedResult = repository.data.size
                expect(expectedResult).to.be.equal(0)
            });
            it("Should test if method doesnt work correctly!", function () {
                let properties = {
                    name: "string",
                    age: "number",
                    birthday: "object"
                };
                //Initialize the repository
                const repository = new Repository(properties);

                let entity = {
                    name: 'Pesho',
                    age: 23,
                    birthday: new Date(1944, 5, 7)
                }
                repository.add(entity)

                expectedResult = () => { repository.del(6) }
                expect(expectedResult).to.be.throw("Entity with id: 6 does not exist!")
            });
        });


    });
});
