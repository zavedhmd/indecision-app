// function square(x){
//     return x*x;
// }

// console.log(square(3));

// // const squareArrow = (x) => {     Identical to below function
// //     return x*x
// // }

// const squareArrow = (x) => x*x;


// console.log(squareArrow(4))

const fullName = "Zaved Ahmed"



// const getFirstName = (x) => {
//     if(fullName){
//         return fullName.split(' ')[0];
//     }
//     else {
//         return "Empty first name"
//     }
// }

const getFirstName = (x) => fullName.split(' ')[0];

console.log(getFirstName(fullName));