// Added the function of the password generator, using check boxes through html to supplement prompts 

function generatePassword() {

  var characterLength = document.querySelector('#characterLengthInput').value;
  var upperCaseCheckInput = document.querySelector('#upperCaseCheck').checked;
  var lowerCaseCheck = document.querySelector('#lowerCaseCheck').checked;
  var specialCaseCheck = document.querySelector('#specialCaseCheck').checked;
  var numberCheck = document.querySelector('#numberCheck').checked;
  var password = "";
 
//  added an error message if you dont meet the character length criteria 
  if (characterLength < 8 || characterLength > 128) {
    return password;
  }

  for (var i = 0; i < characterLength; i++) {
    var validCharacter = false;
    var character;

    // Added if and else if statements to determine if the character generated is valid 
    while (validCharacter == false) {
      character = randomizedValue();

      if (!lowerCaseCheck && lowerCharacters.indexOf(character) !== -1) {
        validCharacter = false;
      }
      else if (!upperCaseCheckInput && upperCharacters.indexOf(character) !== -1) {
        validCharacter = false;
      }
      else if (!specialCaseCheck && specialCharacters.indexOf(character) !== -1) {
        validCharacter = false
      }
      else if (!numberCheck && numbers.indexOf(character) !== -1) {
        validCharacter = false;
      }
      else {
        validCharacter = true;
      }
    }

    password += character;
  }

  return password;
}
// Added in the characters that would appear in the generated password for each specific character type 
var specialCharacters = ['%', '!', '$', '@', '#']
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allChars = [...lowerCharacters,
...upperCharacters,
...numbers,
...specialCharacters];
function randomizedValue() {

  var index = Math.floor(Math.random() * allChars.length);
  var character = allChars[index];

  return character;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password == "") {

    alert("You must enter a value between 8 and 128 for character length.")
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
