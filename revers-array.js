// array revers method
// array revers method array ko revers se print karta hai

let number = [1,2,3,4,5]
let reversNum = number.reverse()
console.log(reversNum) //[5,4,3,2,1]

let str = "this is coding"

let reversStr = str.split("").reverse().join("")
console.log(reversStr) //gnidoc si siht

// let,s create function => as argument accessept an array of game participants and return position of winners in desanding order

function reversArr(participant){
    return participant.reverse()
}
console.log(reversArr(["meekail",'aslam',"mujaahid"])) //["mujaahid","aslam","meekail"]

