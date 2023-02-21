function previusDay(year, month, day){
    let d = new Date(year, month, day)
    d.setDate(day-1)
    console.log(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`)
}
previusDay(2016, 10, 1) 