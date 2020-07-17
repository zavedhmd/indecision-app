var nameVar = "Zaved";
var nameVar = "Priti";
console.log('nameVar', nameVar);

let nameLet = "Ahmed";
nameLet = "Banerjee";           // Can be changed but not redefined
console.log('nameLet', nameLet);

const nameConst = "Babi";
//nameConst = "Dabbu"             // Can't Change
console.log('nameConst', nameConst);

// Block scoping

// To test the cases, comment out the other blocks

// Block 1
var fullName = 'Zaved Ahmed';

if (fullName){
    var firstName = fullName.split(' ')[0];     // firstName is function scoped which means it will be accessible outside IF BLOCK 
    console.log(firstName);
}

console.log(firstName); // function scoped (Available outside if block)


// Block 2
if (fullName){
    const firstName = fullName.split(' ')[0];     // firstName is block scoped which means it will not be accessible outside IF BLOCK 
    console.log(firstName);
}

console.log(firstName); // block scoped (NOT Available outside if block)
