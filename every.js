// array every method 

let number = [1,2,3,4,5,6,7,8];

// every method me dali gayi condition sare arr method per true hoti hai to hi rue return hota hai aik bhi element per codition false hote hi fasle return hota hai

let result = number.every(isPositive)
function isPositive(item){
    return item >= 0 ;
}
console.log(result)

let arrOfenObj = [
    {
        name:"meekail"
    },
    {
        name:"mujaahid"
    },
    {
        name:"fayyaz"
    },
    {
        name:"faizan"
    },
    {
        name:"meekail"
    }
];
let obj = arrOfenObj.every(person => person.name !== undefined);
console.log(obj)