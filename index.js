let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "`~!@#$%^&*()-_=+[{]};:',<.>/?";

    const data = lowerAlphabet + upperAlphabet + numeric +symbol;
    let generator = '';
    for (let i = 0; i < len; i++){
        generator += data[~~(Math.random() * data.length)];
    }
    // syntax ~~ sama dengan Math.floor
    console.log(`Generator Value : ${generator}`);
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
        alert('Password has been generated!');
    }, 500);   
}

const savePassword = () => {
    
    var fileName = "Password.txt";
    var fileContent = `Your Password: ${password.value}`;
    var myFile = new Blob([fileContent], {type: 'text/plain'});

    window.URL = window.URL || window.webkitURL;

    saveButton.setAttribute("href", window.URL.createObjectURL(myFile));
    saveButton.setAttribute("download", fileName);

    setTimeout(() => {
        alert('Password has been saved');
    }, 500);
}


// arrow function

// contoh tanpa arrow function:
// hello = function() {
//     return "Hello World!";
//   }

// contoh pakai arrow function:
// hello = () => {
//     return "Hello World!";
//   }