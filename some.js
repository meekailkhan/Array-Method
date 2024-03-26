// array some method
let arr = [1,2,3,4,5,6];
// some method every method ka opposite hai isme dali gyi condition aik array element per bhi true hoti hai to true return karega false tabhi return hoga jab sare element per codition flase ho jaye
// arr.some()

let person = [
    {
        name : "meekail",
        age : 20
    },
    {
        name : "florin",
        age : 5
    },
    {
        name : "ivan",
        age : 10
    }
]

let isAdult = person.some(adult)
function adult(person){
    return person.age >= 18
}

console.log(isAdult)