function cookingByNumbers(num, p1, p2, p3, p4, p5) {
    num = Number(num)
    let arr = [p1, p2, p3, p4, p5]
    for (let el of arr) {
        if (el == "chop"){
            num = num  / 2
            console.log(num)
        }else if (el == "dice"){
            num = Math.sqrt(num)
            console.log(num)
        }else if (el == "spice"){
            num++
            console.log(num)
        }else if (el == "bake"){
            num = num * 3
            console.log(num)
        }else{
            num = num - num * 0.2
            console.log(num)
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')