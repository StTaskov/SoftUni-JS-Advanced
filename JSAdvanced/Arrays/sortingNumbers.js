function solve(arr){
    let counter = 0
    let result = []
    arr.sort((a, b) => a - b)
    while(arr.length > 0){
        if (counter % 2 ==0){
        result.push(arr.shift())
        }else{
        result.push(arr.pop())}
        counter ++
    }

    return result
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, 18, 56]))