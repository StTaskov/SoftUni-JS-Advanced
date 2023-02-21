function notify(message) {
  // Take the div tag
  let divElement = document.getElementById('notification')
  // Change div text with message from function
  divElement.textContent = message;
  divElement.style.display = 'block'
  // Add Event Listener when the div is clicked to hide
  divElement.addEventListener('click', () => {
    divElement.style.display = 'none'
  })
}
