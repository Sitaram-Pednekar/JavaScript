//let's make a array where we store objects

let User1={
    Username:"Twisty",
    Password:"123"
}
let User2={
    Username:"Sneeze",
    Password:"213"
}
let User3={
    Username:"Sitaram",
    Password:"345"
}
let User4={
    Username:"Rutik",
    Password:"657"
}

let AllUser=[User1,User2,User3,User4];

//all object stored in AllUser array
//let's use foreach loop to display

AllUser.forEach(value =>{
    console.log(`${value.Username} , Hello you password is : ${value.Password}`);

})

/*

output: 
    Twisty , Hello you password is : 123
    Sneeze , Hello you password is : 213
    Sitaram , Hello you password is : 345
    Rutik , Hello you password is : 657

*/