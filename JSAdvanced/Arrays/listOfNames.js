function solve(arrNames){
    let result = []
    arrNames = arrNames.sort(function (a, b) {
        return a.localeCompare(b);
      })
    for (let i = 0; i < arrNames.length; i++){
        result.push(`${i+1}.${arrNames[i]}`)
    }
    console.log(result.join("\n")) 
}
solve(["John", "Bob", "Christina", "Ema"])