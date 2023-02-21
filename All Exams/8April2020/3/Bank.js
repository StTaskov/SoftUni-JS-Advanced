class Bank {
    #bankName
    constructor(bankName) {
        this.#bankName = bankName
        this.allCustomers = []
    }

    //Obj {firstName, lastName, personalId}
    newCustomer(customer) {
        let neededCustomer = this.allCustomers.find(o => o.personalId === customer.personalId)

        if (neededCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer)
            return customer
        }
    }

    depositMoney(personalId, amount) {
        let neededCustomer = this.allCustomers.find(o => o.personalId === personalId)

        if (!neededCustomer) {
            throw new Error('We have no customer with this ID!')
        } else {
            if(!neededCustomer.totalMoney && !neededCustomer.transactions){
            neededCustomer['totalMoney'] = 0
            neededCustomer['transactions'] = []
            neededCustomer.totalMoney += amount
            neededCustomer.transactions.push(`${neededCustomer.firstName} ${neededCustomer.lastName} made deposit of ${amount}$!`)
            }else{
            neededCustomer.totalMoney += amount
            neededCustomer.transactions.push(`${neededCustomer.firstName} ${neededCustomer.lastName} made deposit of ${amount}$!`)
            }
            return `${neededCustomer.totalMoney}$`
        }
    }

    withdrawMoney(personalId, amount) {
        let neededCustomer = this.allCustomers.find(o => o.personalId === personalId)

        if (!neededCustomer) {
            throw new Error('We have no customer with this ID!')
        } else if (neededCustomer.totalMoney < amount) {
            throw new Error(`${neededCustomer.firstName} ${neededCustomer.lastName} does not have enough money to withdraw that amount!`)
        } else {
            neededCustomer.totalMoney -= amount
            neededCustomer.transactions.push(`${neededCustomer.firstName} ${neededCustomer.lastName} withdrew ${amount}$!`)
            return `${neededCustomer.totalMoney}$`
        }
    }

    customerInfo(personalId){
        let neededCustomer = this.allCustomers.find(o => o.personalId === personalId)
        if (!neededCustomer) {
            throw new Error('We have no customer with this ID!')
        }else{
            let result = `Bank name: ${this.#bankName}\nCustomer name: ${neededCustomer.firstName} ${neededCustomer.lastName}\nCustomer ID: ${neededCustomer.personalId}\nTotal Money: ${neededCustomer.totalMoney}$\nTransactions:\n`
            for (let i = neededCustomer.transactions.length; i > 0; i--){
                if (i != 1){
                    result += `${i}. ${neededCustomer.transactions[i-1]}\n`
                }else{
                result += `${i}. ${neededCustomer.transactions[i-1]}` 
                }
            }
            return result
        }
        
        
    }
}
//zero test 1
let Bank = result;
let name = 'SoftUni Bank';
let bank = new Bank(name);


let customer1 = bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
expect(customer1.firstName).to.be.equal('Svetlin');

let customer2 = bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 });
expect(customer2.lastName).to.be.equal('Mileva');
expect(customer2.personalId).to.be.equal(3333333);

let totalMoney1 = bank.depositMoney(1111111, 250);
expect(totalMoney1).to.be.equal('250$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney2 = bank.depositMoney(1111111, 250);
expect(totalMoney2).to.be.equal('500$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney3 = bank.depositMoney(3333333, 555);
expect(totalMoney3).to.be.equal('555$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney4 = bank.withdrawMoney(1111111, 125);
expect(totalMoney4).to.equal('375$', 'Function withdrawMoney returns incorrect totalMoney');

let output = bank.customerInfo(1111111);
let expectedOutput = `Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 1111111
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made deposit of 250$!
1. Svetlin Nakov made deposit of 250$!`;
expect(expectedOutput).to.be.equal(output, 'Incorrect output');
