function sumTable() {
    sum = 0
    // Get table 
    let rows = Array.from(document.querySelectorAll('table tbody tr'))
    // Start loop through it exclude first and last rows
    for (let i = 1; i < rows.length-1; i++) {
        sum += Number(rows[i].getElementsByTagName('td')[1].textContent)
    }
    // Sum element from loop and place at sum row
    let bill = rows[rows.length-1].getElementsByTagName('td')[1]
    bill.textContent = sum
}