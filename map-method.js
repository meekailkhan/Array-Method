// Array Map method 

let arr = [1,2,3,4,5,6]

let doubleArr = arr.map(multiplyFn)

function double(item,index,arr){
    return item*2
}

function multiplyFn(item,index,arr){
    return item*index
}


console.log(arr)
console.log(doubleArr)


let product = [
    {
        name:"laptop",
        price:1000,
        count:4
    },
    {
        name:"Desktop",
        price:1500,
        count:5
    },
    {
        name:"Mobile",
        price:2000,
        count:3
    }

]

let totalPrice = product.map(item =>({
    name:item.name,
    totalValue : item.price*item.count
}))
console.log(totalPrice)


// string array to number array
let str = ["1","2","3","4","5","6"]

let numberArr = str.map(item => Number(item))
console.log(str)
console.log(numberArr)