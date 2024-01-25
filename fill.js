let num = [1,2,3,4,5,6,7]
num.fill(4 , 3 ,6) //argument => 1)jis number se fill karna hai 
                     //   2)jis index se fill karna start karna hai
                    //    3)jis index per fill karna end karna note=>jis index number ko third argument me rkhte hai us index ko touch nhi karta 
                    

console.log(num)

function countNum(n){
    return Array(n)
    .fill(0)
    .map((item,index)=>index + 1)
}

console.log(countNum(10))
