function tickets(day, age){
    age = Number(age)

    if (0 <= age <= 18){
        if (day === "Weekday"){
            console.log("12$")
        }
        else if (day === "Weekend"){
            console.log("15$")
        }
        else if (dat === "Holiday"){
            console.log("5$")
        }
        else{
            console.log("Error!")
            }
        }
    else if (18 < age <= 64){
        if (day === "Weekday"){
            console.log("18$")
        }
        else if (day === "Weekend"){
            console.log("20$")
        }
        else if (dat === "Holiday"){
            console.log("12$")
        }
        else{
            console.log("Error!")
        }
    }
    else if (64 < age <= 122){
        if (day === "Weekday"){
            console.log("12$")
        }
        else if (day === "Weekend"){
            console.log("15$")
        }
        else if (dat === "Holiday"){
            console.log("10$")}
        else{
            console.log("Error!")
        }
        }
    else{
        console.log("Error!")
    }
    }

tickets('Weekday', 42)