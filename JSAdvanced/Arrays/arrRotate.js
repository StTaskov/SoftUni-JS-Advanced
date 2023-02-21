function rotateArr(arr, rotations){
    for (let i = 0; i < rotations; i++){
        el = arr.pop()
        arr.unshift(el)
    }
    console.log(arr.join(" "))
}

rotateArr(['1', 
'2', 
'3', 
'4'], 
2
)
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)
