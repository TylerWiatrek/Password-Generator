// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword(event) {
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
  //asking the user for the password criteria and what they would like to use
  //adding a window.confirm here to reference later in the code using boolean values
  else {
    var lowercaseLetters = window.confirm("Would you like to include lowercase letters?");
    var uppercaseLetters = window.confirm("Would you like to include uppercase letters?");
    var numbers = window.confirm("Would you like to include numbers?");
    var special = window.confirm("Would you like to include special characters?");

  }
    // the first if statement, this will run if the user selects all 4 conditions
    // note: in the following lines of codes, there will be if statements that run through all 
    // the different conditions the user might select
     if (lowercaseLetters && uppercaseLetters && numbers && special) {
      // creating an array of the content in which the password might contain, here we have all the possibly outcomes the password
      // might generate. Note: this array will differ in the following code to come. It will reflect the values consistent with what
      // the user selected as their criteria.
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      // Setting an empty variable Array for now, we will store values in this later in a few lines
      var finalPasswordArray = "";
      // Setting the length of the empty variable Array to 'characters' which was earlier defined when the user
      //entered how many characters they would like to use. this allows the length of the array to match the character limit.
      finalPasswordArray.length = characters;
      //creating a for loop here to run through each character iteration, for example if the user entered 15 characters, this will
      // be able to generate 15 values
      for (var i = 0; i < characters; i++) {
        // here we are finally storing values in our empty variable array declared earlier. we use math.random and math.floor
        // to generate a random value in the array listed above. then this value is stored, the for loop runs again and the before empty
        // array now has 1 value. now on its second iteration, the array will get its 2nd value. this will continue until we have reach 
        // the characters limit
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      // Lastly in the if statement, we set a window.alert to alert the user of the password.
      window.alert(finalPasswordArray);

    }
    // Setting an else if statement here in case the user selects all values except the special characters. Note: the remaining
    // of this if statement is similar to the one previously, we are just dealing with a different starting array. Also note:
    // the following else if statements will follow the same structure. The conditions of the if statment will change and therefore,
    // the starting array names passwordContent will display this change and list the possible outcomes.
    else if (lowercaseLetters && uppercaseLetters && numbers && !special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
     else if (lowercaseLetters && uppercaseLetters && !numbers && special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (lowercaseLetters && !uppercaseLetters && numbers && special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && uppercaseLetters && numbers && special) {
      var passwordContent = [

        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (lowercaseLetters && uppercaseLetters && !numbers && !special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (lowercaseLetters && !uppercaseLetters && numbers && !special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && uppercaseLetters && numbers && !special) {
      var passwordContent = [
    
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (lowercaseLetters && !uppercaseLetters && !numbers && special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
   
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && uppercaseLetters && !numbers && special) {
      var passwordContent = [
    
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
    
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && !uppercaseLetters && numbers && special) {
      var passwordContent = [
     
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && !uppercaseLetters && !numbers && special) {
      var passwordContent = [
    
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        ">",
        "=",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "{",
        "}",
        "|",
        "~",
        "`",
     
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && !uppercaseLetters && numbers && !special) {
      var passwordContent = [
    
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (!lowercaseLetters && uppercaseLetters && !numbers && !special) {
      var passwordContent = [
 
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    
      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }
    else if (lowercaseLetters && !uppercaseLetters && !numbers && !special) {
      var passwordContent = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",

      ];
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);
      

    }
    // the final if statement which will run if the user does not select any criteria. The user must select at least one criteria for
    // the above function to run. 
    if (!lowercaseLetters && !uppercaseLetters && !numbers && !special) {
      // alerting the user with a message that they must select at least one criteria and promting them to try again
      window.alert("You need to select at least one criteria. Please try again!");
      // since the user did not select any criteria, we are calling the function again here so the user can restart and enter 
      // at least one criteria
      writePassword();
     
    }
  
  
  //selecting the #password id tag in the html so that we can later store the password generated in this section 
  var passwordText = document.querySelector("#password");
  //displaying the created password on screen for the user.
  passwordText.textContent = finalPasswordArray;

}
// adding an event listener here so that when the user clicks on the generate button, the writePassword function will run.
generateBtn.addEventListener("click", writePassword);
