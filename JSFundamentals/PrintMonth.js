function MonthPrinter(num){
    num = Number(num)
    if (num <= 12){
        switch(num){
            case num = 1:
                console.log("January")
                break
            case num = 2:
                console.log("February")
                break
            case num = 3:
                console.log("March")
                break
            case num = 4:
                console.log("April")
                break
            case num = 5:
                console.log("May")
                break
            case num = 6:
                console.log("June")
                break
            case num = 7:
                console.log("July")
                break
            case num = 8:
                console.log("August")
                break
            case num = 9:
                console.log("September")
                break
            case num = 10:
                console.log("October")
                break
            case num = 11:
                console.log("November")
                break
            case num = 12:
                console.log("December")
                break
        }
    }
    else{
        console.log("Error!")
    }
}