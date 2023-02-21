function daysInMonth (month, year){
    date = new Date(year, month, 0).getDate()
    console.log(date)
}

daysInMonth(1, 2012)