//use commonjs
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const fs = require('fs');

//function for generating length 8 unique id with the help of uuid package
function generateUniqueID(firstname, lastname){
    let generateUniqueID = "";
    let testuuid = uuidv4().slice(0,8); //slice up to the eigth character of the generated uuid
    generateUniqueID += firstname[0].toLowerCase() + lastname.toLowerCase() + testuuid; //concatenate everything
    return generateUniqueID;
} 

function addAccount(accountDetails){
    //even though first name up to email are strings, i used string cast to access the string methods during intellisense
    let firstname = String(accountDetails[0]);
    let lastname = String(accountDetails[1]);
    let email = String(accountDetails[2]);
    let age = parseInt(accountDetails[3]);

    //conditions for saving the account
    if(firstname.trim() && lastname.trim() && email.trim() && validator.isEmail(email) && age >= 18){
        let account_to_save = firstname + ',' + lastname + ',' + email + ',' + String(age) + ',' + generateUniqueID(firstname, lastname) + "\n";
        //file writing when it's possible to save the account
        fs.appendFile('users.txt', account_to_save, (err) => {
            if (err) throw err;
        });;
        return true;
    }
    return false;
}

//export the module addAccount using commonjs
module.exports = addAccount;