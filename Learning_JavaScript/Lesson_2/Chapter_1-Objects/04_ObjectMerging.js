//here we studying how the object merge work

//like array we do then what will be the result let's see
const obj1 = {
    A:'a',
    D:'d'
}
const obj2 ={
    B:'b',
    C:'c',

}
const obj3={ obj1 , obj2};
console.log(obj3);
/*

output:
{ obj1: { A: 'a', D: 'd' }, obj2: { B: 'b', C: 'c' } }

*/
//here same happened like array where it categorized in nested if we need plain 

const obj4=Object.assign(obj1,obj2);
console.log(obj4);
/*

output:
{ A: 'a', D: 'd', B: 'b', C: 'c' }
here the syntax of assign is


Object.assign(target,source)

in that upper example the target is obj1 that's why the obj1 value also change
*/

console.log(obj1);
//{ A: 'a', D: 'd', B: 'b', C: 'c' }
//see the obj1 value also change instead of this we uses {} on target value how let's see

//here we are creating obj object not obj1
const obj = {
    A:'a',
    D:'d'
}
const obj5 = Object.assign({}, obj, obj2);//now the output will perfect and no affect on obj;
console.log(obj5);
console.log(obj);//the obj won't change


//here another simplest technique and most of people uses this 

const object= {...obj1 , ...obj2};
console.log(object);
//the output:
//      { A: 'a', D: 'd', B: 'b', C: 'c' }