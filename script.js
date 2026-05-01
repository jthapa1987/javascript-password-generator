// Assignment Code (Existing in source 2)
var generateBtn = document.querySelector("#generate");

// Character arrays
var lowercaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericArr = "0123456789".split("");
var specialArr = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");

function generatePassword() {
  // 1. Prompt for length
  var length = parseInt(prompt("Choose a password length between 8 and 128 characters:"));

  // Validate length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }

  // 2. Prompt for character types
  var hasLower = confirm("Include lowercase characters?");
  var hasUpper = confirm("Include uppercase characters?");
  var hasNumeric = confirm("Include numeric characters?");
  var hasSpecial = confirm("Include special characters?");

  // 3. Validate at least one type is selected[cite: 4]
  if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // 4. Build character pool
  var pool = [];
  if (hasLower) pool = pool.concat(lowercaseArr);
  if (hasUpper) pool = pool.concat(uppercaseArr);
  if (hasNumeric) pool = pool.concat(numericArr);
  if (hasSpecial) pool = pool.concat(specialArr);

  // 5. Generate random string
  var finalPassword = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * pool.length);
    finalPassword += pool[randomIndex];
  }

  return finalPassword;
}

// Write password to the #password input (Existing in source 2)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener (Existing in source 2)
generateBtn.addEventListener("click", writePassword);