function solve(arr){
    arr.sort(function (a, b) {
        return a.localeCompare(b);
      })
    arr.sort((a, b) => a - b)
    arr.sort((a, b) => a.length - b.length)
    console.log(arr.join("\n"))
}
solve(['test', 
'Deny', 
'omen', 
'Default']
)   