// reduc method 
// reduce method se hum array ke item ko jod saskte hai

let arr = [1,3,5,7,9,6,8,8]

let total = arr.reduce(sumFn,0)

function sumFn(accuumulator,item){
    return accuumulator + item
}

console.log(total)

// whos the bigger number
let num = [4,7,3,2,7,88,5,36,89,4,3]

let biggerNum = num.reduce(biggerFn,-Infinity)

function biggerFn(accumulator,item){
    if(accumulator>item){
        return accumulator
    }else{
        return item
    }
}

console.log(biggerNum)

// total value of store
let store = [
    {
        product : "laptop",
        price : 1500,
        count : 7
    },
    {
        product : "desktop",
        price : 1000,
        count : 4
    },
    {
        product : "mobile",
        price : 750,
        count : 15
    }
]

let totalValue = store.reduce((accumulator,item)=>{
    return accumulator = (item.price * item.count)
},0)

console.log(totalValue)