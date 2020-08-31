// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercasePrompt = confirm("would you like uppercase characters?");
var lowercasePrompt = confirm("would you like lowercase characters?");
var numbersPrompt = confirm("would you like numbers?");
var symbolsPrompt = confirm("would you like symbols?");
var numbersOfCharacters = prompt("how many characters would you like in your password")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












