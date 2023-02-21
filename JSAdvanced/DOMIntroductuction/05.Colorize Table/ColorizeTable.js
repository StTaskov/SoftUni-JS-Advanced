function colorize() {
    // Take the table like array
    rows = document.querySelectorAll('tr');
    //Start loop through the table and colorize ever even row
   for (var i = 1; i < rows.length; i+=2) {
        rows[i].style.backgroundColor = 'Teal'
    }  
}       