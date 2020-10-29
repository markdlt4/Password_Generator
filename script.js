// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEF"
var lower = "abcdef"
var num = "12345"
var special = "!@#$%^&*()_"
var numchar_input;
var upper_confirm;
var lower_confirm;
var password_char = "ABCDEFabcdef1235"

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    numchar_input = parseInt(prompt("Please choose a number between 8 and 128."));

    if (!numchar_input) {
        alert("no value")
    } else if (numchar_input < 8 || numchar_input > 128) {
        alert("not the right amount")
        //numchar_input = parseInt(prompt("Please choose a number between 8 and 128."));//
        return;
    }
    else {
        confirmQuestions()
    };

    if (!upper_confirm && !lower_confirm && !numeric_confirm && !special_confirm) {
        alert("nothing picked")
        return;
    }
    
    else if (upper_confirm === true && lower_confirm === true) {
        password_char = password_char + upper + lower;
    }
    else if (lower_confirm === true && upper_confirm === false) {
        password_char = password_char + lower;
    } else if (lower_confirm === false && upper_confirm === true) {
        password_char = password_char + upper;
    }
    
    console.log(numchar_input);
    console.log(upper_confirm);
    console.log(lower_confirm);
    console.log(password_char);


    passwordText.value = password;

}
function confirmQuestions() {
    upper_confirm = confirm("Would you like uppercase characters?")
    lower_confirm = confirm("Would you like lowercase characters?")
    numeric_confirm = confirm("Would you like numeric characters?")
    special_confirm = confirm("Would you like special characters?")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    var password_placeholder = password_char
    var generated_pass = ""
    for (var i = 0; i < numchar_input; i++) {
        generated_pass += password_placeholder.charAt(Math.floor(Math.random() * password_placeholder.length))
    }



    return generated_pass;

}