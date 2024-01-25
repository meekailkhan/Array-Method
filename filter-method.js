// filter method in array 
// filter method hamea jis item per condition true hoti hai wo element find karke data hai

let num = [1,2,3,4,5,6,7]

let evenNum = num.filter(isEven)

function isEven(item){
    return item%2==0
}
console.log(evenNum)

let person =[
    {
        name : "meekail",
        age : 17
    },
    {
        name : "aslam",
        age : 58
    },
    {
        name : "mujaahid",
        age : 24
    },
    {
        name : "isha",
        age : 6
    }
]

let adultPerson = person.filter(item => item.age >= 18)
console.log(adultPerson)

// remove same number

let number = [1,2,4,2,5,6,4,3,2,1,5,3,1,3,4,4,2]

let unicNumber = number.filter((item,index,arr)=>{
    return arr.indexOf(item) === index
})
console.log(unicNumber)

