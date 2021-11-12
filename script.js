// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Getting the characters response from the user
  var characters = window.prompt("How many characters would you like the password to have?");
  //Making sure the user entered at least 8 characters
  if (characters < 8) {
    window.alert("You need to have at least 8 characters. Please try again.");
    return writePassword();
  }
  //Making sure the user entered no more than 128 characters
  else if (characters > 128) {
    window.alert("You cannot have more than 128 characters. Please try again.");
    return writePassword();
  }
  else {
    var lowercaseLetters = window.confirm("Would you like to include lowercase letters?");
    var uppercaseLetters = window.confirm("Would you like to include uppercase letters?");
    var numbers = window.confirm("Would you like to include numbers?");
    var special = window.confirm("Would you like to include special characters?");

  }
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Adding () after writePassword to call this function.
generateBtn.addEventListener("click", writePassword());
