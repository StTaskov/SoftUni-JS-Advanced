class List{
    constructor(){
        this.items = [];
        this.size = 0
    }

    checkIndexValid(index){
        if (0 <= index  && index< this.size){
            return true;
        }else{
            return false;
        }
    }

    add(item){
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.size ++;
    }

    remove(index){
        if (this.checkIndexValid(index)){
            this.items.splice(index, 1);
            this.size --;
        }
    }

    get(index){
        if (this.checkIndexValid(index)){
            return this.items[index]
        }
    }
}

let myList = new List;
myList.add(5);
console.log(myList.get(0))