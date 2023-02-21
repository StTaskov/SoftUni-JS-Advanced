function solve(ticketsArray, sorting){

    function neededSort(sortingMethod, sortingArray){
        if (sortingMethod == 'destination'){
            sortingArray.sort((a, b) => {return a.destination.localeCompare(b.destination)});
        }else if(sortingMethod == 'price'){
            sortingArray.sort((a, b) => a.price - b.price);
        }else{
            sortingArray.sort((a, b) => {return a.status.localeCompare(b.status)});
        }

        return sortingArray;
    }

    let result = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const el of ticketsArray) {
        [destination, price, stat] = el.split('|');
        price = Number(price)
        result.push(new Ticket(destination, price, stat))
    }

    result = neededSort(sorting, result)
    return result
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))