/*
Objects:
    Studying objects in more depth
*/

// Previous simple object for reference
/*
const User = {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040'
}
*/

// Creating a new nested object
const NewUser = {
    ID: '123',
    Name: 'Twisty',
    Address: 'India',
    PinCode:'4040',
    // Nested object
    Hobby: {
        Singing: {
            Type1: "classical",
            Type2: "modern semi classical"
        }
    }
};

// Accessing nested objects
console.log(NewUser.Hobby);
// Output: { Singing: { Type1: 'classical', Type2: 'modern semi classical' } }

console.log(NewUser.Hobby.Singing);
// Output: { Type1: 'classical', Type2: 'modern semi classical' }

console.log(NewUser.Hobby.Singing.Type1);
// Output: classical

// Optional chaining (?.)
// Useful when you are not sure if a property exists (like API responses)
console.log(NewUser.Hobby?.Singing.Type1);
// Output: classical

// Example if Hobby did not exist
const UserWithoutHobby = {
    ID: '456',
    Name: 'Alex'
};

console.log(UserWithoutHobby.Hobby?.Singing.Type1);
// Output: undefined (instead of throwing an error)
