// slice method original array ko change nhi karta hai

let number = [1,2,3,4,5,6]
// undefined == 0 true
// keep in mind last index not includes in this new array for example index 4 = 5 but 5 is not includes in this 
let newNum = number.slice(undefined,4)
console.log(newNum)

// take winner from array
let participant = ["meekail","aslam","mujaahid","isha","sheesh"]

let winner = participant.slice(0,3)
console.log(winner)
