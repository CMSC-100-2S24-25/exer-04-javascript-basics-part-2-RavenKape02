const addAccount = require('./index.js')

console.log(addAccount(['John', 'Doe', 'johndoe@example.com', 25])); // true
console.log(addAccount(['', 'Doe', 'johndoe@example.com', 25])); // false 
console.log(addAccount(['John', '', 'johndoe@example.com', 25])); // false
console.log(addAccount(['John', 'Doe', '', 25])); // false
console.log(addAccount(['John', 'Doe', 'not-an-email', 25])); // false 
console.log(addAccount(['John', 'Doe', 'johndoe@example.com', 17])); // false
console.log(addAccount(['John', 'Doe', 'johndoe@example.com', 'abc'])); // false 
console.log(addAccount(['Jane', 'Smith', 'janesmith@example.com', 30])); // true 

/*
The text file users.txt should contain this after running test.js

John,Doe,johndoe@example.com,25,jdoe<random-8-bit-uuid>
Jane,Smith,janesmith@example.com,30,jsmith<random-8-bit-uuid>

*/