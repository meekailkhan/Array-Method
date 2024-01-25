// sort method

let name = ["meekail","aslam","mujaahid","isha"]
name.sort()
console.log(name)

let number = [43,76,4,302,5,105,110,807,34,98,78,57,84]

number.sort(compareNumber)
console.log(number)

function compareNumber(a,b){
    return a-b
}