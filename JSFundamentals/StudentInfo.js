function SudentInfo(name, age, grade){
    age = Number(age)
    grade = Number(grade).toFixed(2)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`)
}

SudentInfo('John', 15, 5.54678)