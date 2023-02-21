function dayOfWeek(str){
    const map = new Map()
    map.set("Monday", 1)
    map.set("Tuesday", 2)
    map.set("Wednesday", 3)
    map.set("Thursday", 4)
    map.set("Friday", 5)
    map.set("Saturday", 6)
    map.set("Sunday", 7)
    
    if (map.has(str)){
        console.log(map.get(str))
    }else{
        console.log("error")
    }
}

dayOfWeek('Friday')