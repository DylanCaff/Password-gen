// Assignment Code
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ('');
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split ('');
var num = "1234567890".split('');
var symbol = "!@#$%^&*()_+".split('');

function generatePassword() {
  var array = [];
  var answer = "";
  var passLength = prompt(
    'How long would you like your password to be?\n8-128'
  );
  if(passLength < 8 ||passLength > 128) {
    alert('Your password must bebetween 8 and 128 characters. Please retry!')
    generatePassword();
  } else {
    if(confirm('Would you like uppercase in your password?')) {
      array = array.concat(upperCase);
    }
    if(confirm('Would you like lowercase in your password?')) {
      array = array.concat(lowerCase);
    }
    if(confirm('Would you like numeric in your password?')) {
      array = array.concat(num);
    }
    if(confirm('Would you like symbols in your password?')) {
      array = array.concat(symbol);
    }
    if(array.length === 0) {
      alert("You need to choose atleast one typer of character, to create a password. Please retry!"
      );
      generatePassword();
    } else {
      for(var i = 0; i < passLength; i++) {
          var random = Math.floor(math.random() * array.length);
          answer += array[random];
      }
    }
    console
    return answer;
  }
  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

