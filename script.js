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
 
     if (lowercaseLetters && uppercaseLetters && numbers && special) {
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
      var finalPasswordArray = "";
      finalPasswordArray.length = characters;
      
      for (var i = 0; i < characters; i++) {
        finalPasswordArray += passwordContent[Math.floor(Math.random() * passwordContent.length)];


      }
      window.alert(finalPasswordArray);

    }

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
    if (!lowercaseLetters && !uppercaseLetters && !numbers && !special) {
      window.alert("You need to select at least one criteria. Please try again!");
      writePassword();
     
    }

   
    





  generateBtn.addEventListener("click", writePassword);  
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = finalPasswordArray;

}

// Add event listener to generate button
// Adding () after writePassword to call this function.
generateBtn.addEventListener("click", writePassword());
