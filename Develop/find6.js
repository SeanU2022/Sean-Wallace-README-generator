// the array to search
const fruits = [
    {name: 'apples', quantity: 2},
    {name: 'tomatoes', quantity: 6},
    {name: 'bananas', quantity: 3},
    {name: 'pears', quantity: 5},
    {name: 'kiwi', quantity: 4},
];


console.log('EXAMPLE 1- find apples fruit using hardcoded CALLBACK function searching a JSON array of objects');
// the callback function used by find...
// console.log('the hardcoded callback fn findApples returns true when it finds "apples"');
// console.log('the hardcoded callback fn findApples returns undefined when it doesn"t which you need to process');
// console.log('the callback function in find takes 4 params: ELEMENT, optional(INDEX, ARRAY, thisARGS)');
// console.log('the 4 params can be called any name you like; here we are using iWantThisFruit for the ELEMENT param');
function findApples(iWantApples){
    return iWantApples.name === 'apples';        //fruits.find tells findApples to refer to fruits[x].name
}
// the find method takes/uses the callback function...
let searchedFruit = fruits.find(findApples);
console.log(searchedFruit);



console.log('EXAMPLE 2- find apples fruit using hardcoded ARROW function searching a JSON array of objects');
// the callback function used by find...
// console.log('the hardcoded callback fn findApples returns true when it finds "apples"');
// console.log('the hardcoded callback fn findApples returns undefined when it doesn"t which you need to process');
// console.log('the callback function in find takes 4 params: ELEMENT, optional(INDEX, ARRAY, thisARGS)');
// console.log('the 4 params can be called any name you like; here we are using iWantApples for the ELEMENT param');
//
//  callback function was moved to shorthand arrow...
//
// the find method takes/uses the callback ARROW function...
let searchedFruitByArrow = fruits.find((iWantThoseApples) => {return iWantThoseApples.name === 'apples'});
console.log(searchedFruitByArrow);



console.log('EXAMPLE 3- rather than hardcode the callback/arrow function it is better to use VARIABLES for search criteria BUT this EXAMPLE HAS A GLOBAL SCOPE NATURE!');
const searchCriteria = 'apples';
function softFindApples(iWantApples){
    return iWantApples.name === searchCriteria;        //fruits.find tells softFindApples to refer to fruits[x].name
}
// the find method takes/uses the callback function...
let softSearchedFruit = fruits.find(softFindApples);
console.log(softSearchedFruit);



console.log('EXAMPLE 4- it is BEST to use parameters than out of scope variables');
// create a function in the callback function to use parameters
// "create a function that takes the search term; and from that function return to the callback function used by the find method"
function myFruitSearch(fruitToFind) {
    function findFruit(iWantFruit){
        return iWantFruit.name === fruitToFind;        //fruits.find tells findFruit to refer to fruits[x].name
    };
    return findFruit;
};
// the find method takes/uses the callback function with a parameter...
let searchedFruit2 = fruits.find(myFruitSearch('kiwi'));
console.log(searchedFruit2);



// shorthand for EXAMPLE 4 
console.log('EXAMPLE 5- EXAMPLE 4 using ARROW function; tomato is fruit in my view');
function myFruitSearch3(fruitToFind) {
    return (iWantFruit3)=>{return iWantFruit3.name === fruitToFind};
};
// the find method takes/uses the callback function with a parameter...
let searchedFruit3 = fruits.find(myFruitSearch3('tomatoes'));
console.log(searchedFruit3);



console.log('EXAMPLE 6=shit- find in an array or an object at the same time');
console.log('EXAMPLE 6=shit- the second parameter gets referred to as "this"');
const objectCat = {
    name: 'gooby',
    age: 5
};

function findApplesCat(iWantApples){
    console.log(this);
    return iWantApples.name === this.name;        //fruits.find tells findApples to refer to fruits[x].name
}
// the find method takes/uses the callback function...
let searchedThing = fruits.find(findApplesCat, objectCat);
console.log(searchedThing);