// Merging Objects in JavaScript

// Creating two separate objects
const obj1 = {
    A: 'a',
    D: 'd'
};

const obj2 = {
    B: 'b',
    C: 'c',
};

// Merging objects by nesting (like pushing array into array)
const obj3 = { obj1, obj2 };
console.log(obj3);
/*
Output:
{ obj1: { A: 'a', D: 'd' }, obj2: { B: 'b', C: 'c' } }
- Result is nested objects, not flattened
*/

// Using Object.assign to merge objects (target, source)
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
/*
Output:
{ A: 'a', D: 'd', B: 'b', C: 'c' }
- obj1 is the target, so it is modified
*/

console.log(obj1);
// Output: { A: 'a', D: 'd', B: 'b', C: 'c' }
// Notice: obj1 changed because it was the target

// To merge without modifying the original object, use empty object as target
const obj = {
    A: 'a',
    D: 'd'
};

const obj5 = Object.assign({}, obj, obj2);
console.log(obj5);
// Output: { A: 'a', D: 'd', B: 'b', C: 'c' }

console.log(obj);
// Output: { A: 'a', D: 'd' } 
// obj remains unchanged

// Another modern and popular way: Spread Operator
const object = { ...obj1, ...obj2 };
console.log(object);
// Output: { A: 'a', D: 'd', B: 'b', C: 'c' }
