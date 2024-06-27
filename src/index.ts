// import { printObject } from "./generics/generics";

import { genericFunction, genericFunctionArrow } from "./generics/generics";


// printObject('Hola');
// printObject(123);
// printObject( new Date());
// printObject( {a: 1, b: 'Hola', c: true});

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hola mundo').toUpperCase());
console.log(genericFunctionArrow('Hola mundo2').toUpperCase());