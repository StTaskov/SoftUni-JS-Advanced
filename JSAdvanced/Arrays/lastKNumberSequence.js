function solve(n, k){
    result = [1, 1]
    for (let i = 0; i < n; i++){
        sum = 0
        for (let j = 1; j <= k; j++){
            sum += j
        }
        result.push(sum)
    }
    return result
}

console.log(solve(6,3))

