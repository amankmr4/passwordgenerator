// Assignment Code bottom is for the button
var generateBtn = document.querySelector("#generate");
// i have moved this from function writePassword 
var passwordText = document.querySelector("#password");
// i moved this fucntion here 
var password = generatePassword();



// Write password to the #password input
function writePassword() {
 
  passwordText.value = password;

}

console.log(generatePassword(12, char));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//--------------------------------------------------------
//writing fucntion for generate password
function generatePassword (characterlength, characters) {
  var characterlength = prompt("Please choose the length of your of your password?");
  var symbols = confirm("Would you like any symbols?");
  var uppercase = confirm("would you like upper case letters?");
  var lower = confirm("would you like lower case letters?");

  // this will go against cthe character length set in prompt and run it
  var pwd = " ";
  for(var i=0;i < characterlength;i++){
    pwd += lowerCasedCharacters.charat(math.floor(math.random() * characters.length));
  }

  return pwd
}

//---------------------------------------------------