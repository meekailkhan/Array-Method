
function fillArr(n){
    return Array(n).fill(2).map((item,index)=> index+1)
}

console.log(fillArr(10))