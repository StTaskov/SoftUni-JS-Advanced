function evenPostion (arr){
    result = []
    for (let i = 0; i < arr.length; i+=2) {
        result.push(arr[i])
    }
    console.log(result.join(" "))
}

evenPostion(['20', '30', '40', '50', '60'])
evenPostion(['5', '10'])
