//argument objects - no longer bound with arrow functions.

const add =  (a,b) =>
{
    //console.log(arguments);
    return a+b;
};
console.log(add(55,1))

// this keyword - no longer bound

const user = {
    name : "Zaved",
    cities : ["Kolkata", "Noida", "Delhi"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    numbers : [2,4,6],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * this.number);
    }
};

console.log(multiplier.multiply());