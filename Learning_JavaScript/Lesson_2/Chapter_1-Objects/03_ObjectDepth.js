/*

Objects:
    here we studying slight depthy


*/
//let's copy our last object
/*

const User= {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040'

}this is the previous object

*/


const User= {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040'
}

//here we can actually direct access and it is a simple object creation
//what if there are multiple object in a single object sounds interesting let's see

//taking previous
const NewUser= {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040',
    //let's make another object
    Hobby: {
        Singing: {
            Type1: "classical",
            Type2: "modern semi classical"
        }
    }
}

//we made an object in object it is also called nested object
//how to access let's see

console.log(NewUser.Hobby);
//{ Singing: { Type1: 'classical', Type2: 'modern semi classical' } }
//this will be the output 

//now accessing only singing let's see
console.log(NewUser.Hobby.Singing);
//{ Type1: 'classical', Type2: 'modern semi classical' }
//this is the output

//now next
console.log(NewUser.Hobby.Singing.Type1);
//this will print classical


//like we can make more objects in objects this is very useful in corporate world

//something in real world application
//where the response we get from api where we don't know it is present or not there we uses "?" this keyword. How let's see
console.log(NewUser.Hobby?.Singing.Type1);//here we don't know the Hobby is still there or not for safety we need to use this.



