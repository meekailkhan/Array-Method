// Array forEach method

let letter = ["a","b","c","a","a","b","d","d"]
// let sum = 0;
let count = {}

// defind function outside forEach
// arr.forEach(one)

// // in this perametar 1sr represnt each item of arr. 2nd represent each index of arr 3rd represent whole arr in index time
// function one(item,index,arr){
//     // console.log(item)
//     // console.log(index)
//     console.log(arr)

// }

// sum of array element 
// arr.forEach((item)=>{
//     sum += item
// })
// console.log(sum)

// letter count 
letter.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1
    }
})
console.log(count)

let arr = [1,2,3,4,5]

arr.forEach((item,index)=>{
    console.log(`input: arr[${index}] output => ${item}`)
})