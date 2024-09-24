/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let first = 0
let last = 0
let op = ''
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log

  // Example
  if (event.target.classList.contains('number')) {
    if (!first) {
      first = event.target.innerText
      display.textContent = event.target.innerText
      return
    }
  }

  if (op !== '' && event.target.classList.contains('number')) {
    last = event.target.innerText
    display.textContent += ' ' + last
  }
  // Example
  if (event.target.innerText === '*') {
    display.textContent = display.textContent + ' *'
    op = '*'
  }
  if (event.target.innerText === '/') {
    display.textContent = display.textContent + ' /'
    op = '/'
  }
  if (event.target.innerText === '+') {
    display.textContent = display.textContent + ' +'
    op = '+'
  }
  if (event.target.innerText === '-') {
    display.textContent = display.textContent + ' -'
    op = '-'
  }
  if (event.target.innerText === '=') {
    if (op === '*') {
      first = display.textContent = parseInt(first) * parseInt(last)
    } else if (op === '/') {
      first = display.textContent = parseInt(first) / parseInt(last)
    } else if (op === '+') {
      first = display.textContent = parseInt(first) + parseInt(last)
    } else if (op === '-') {
      first = display.textContent = parseInt(first) - parseInt(last)
    }
    last = 0
  }
  if (event.target.innerText === 'C') {
    first = last = op = 0
    display.textContent = ''
  }
})

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // Future logic to capture the button's value would go here...
  })
})
