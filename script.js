// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '|', ':', ';', '<', ',', '>', '.', '?', '/']
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Declare variable
var randomPassword
var userPassword

// Create function for gerneratePassword
function generatePassword() {

  // Confirm generate password button was pressed
  console.log('Button Pressed')

  // Ask user what they want length of password to be
  var passwordLength = prompt('Please enter a password length between 8 and 128')

  // When conditions of password have not been met alert user of required length and re-ask previous question
  while (passwordLength < 8 || passwordLength > 128) {
    alert('Please enter the required length of password')
    console.log('ERROR: length of password not generated')
    passwordLength = prompt('Please enter a password length between 8 and 128')
  }

  // When user has selected the appropriate length of password will proceed to next steps
   alert('Please chooose the characters you want in your password')

  console.log(passwordLength)

  // User selects what type of characters it wants for password
  var upperCase = confirm('Do you want an uppercase letter?')
  console.log(upperCase)

  var lowerCase = confirm('Do you want a lowercase letter?')
  console.log(lowerCase)

  var symbol = confirm('Do you want a special character?')
  console.log(symbol)

  var number = confirm('Do you want a number?')
  console.log(number)

  // Create loop which requires user to pick a character value
  while (!upperCase && !lowerCase && !symbol && !number) {
    alert('You must select at least one character value to continue.')
    console.log('ERROR: password not generated no character value selected')

    upperCase = confirm('Do you want an uppercase letter?')
    console.log(upperCase)

    lowerCase = confirm('Do you want a lowercase letter?')
    console.log(lowerCase)

    symbol = confirm('Do you want a special character?')
    console.log(symbol)

    number = confirm('Do you want a number?')
    console.log(number)
  }

    alert('Please hold for a moment, your password is being generated')

  // All options are true
  if (upperCase && lowerCase && symbol && number) {
    userPassword = upper.concat(lower, special, num)
    console.log(userPassword)
  }

  // 3 options are true
  else if (upperCase && lowerCase && symbol) {
    userPassword = upper.concat(lower, special)
    console.log(userPassword)
  }

  else if (upperCase && symbol && number) {
    userPassword = upper.concat(special, num)
    console.log(userPassword)
  }

  else if (upperCase && lowerCase && number) {
    userPassword = upper.concat(lower, num)
    console.log(userPassword)
  }

  else if (lowerCase && symbol && number) {
    userPassword = lower.concat(special, num)
    console.log(userPassword)
  }

  // 2 options are true
  else if (upperCase && lowerCase) {
    userPassword = upper.concat(lower)
    console.log(userPassword)
  }

  else if (symbol && lowerCase) {
    userPassword = special.concat(lower)
    console.log(userPassword)
  }

  else if (number && lowerCase) {
    userPassword = num.concat(lower)
    console.log(userPassword)
  }

  else if (symbol && number) {
    userPassword = special.concat(num)
    console.log(userPassword)
  }

  else if (upperCase && number) {
    userPassword = upper.concat(num)
    console.log(userPassword)
  }

  else if (upperCase && symbol) {
    userPassword = upper.concat(special)
    console.log(userPassword)
  }

  // 1 option is true
  else if (upperCase) {
    userPassword = upper
    console.log(userPassword)
  }


  else if (lowerCase) {
    userPassword = lower
    console.log(userPassword)
  }

  else if (symbol) {
    userPassword = special
    console.log(userPassword)
  }

  else {
    userPassword = num
    console.log(userPassword)
  }

  // Length of password
  let randomPassword = ''

  // Create a loop to randomize selection
  for (var i = 0; i < passwordLength; i++) {
    randomPassword += userPassword[Math.floor(Math.random() * userPassword.length)]
    console.log(randomPassword)
  }

  // Password generated and returned to user
  return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);