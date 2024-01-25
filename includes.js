// includes method 

let name = ["meekail","aslam","mujaahid"]

let result = name.includes("meekail")

console.log(result)

// have fruit function 
// if fruit in buket so print index of fruit other then -1

let fruitBuket = ["apple","banana","papaya","kivi","grapes","mango","lichi"]

function haveFruit(fruit){
    if(fruitBuket.includes(fruit)){
        return fruitBuket.indexOf(fruit)
    }else{
        return -1
    }
}

console.log(haveFruit("watermelon"))