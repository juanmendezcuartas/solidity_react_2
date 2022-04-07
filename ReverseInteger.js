let x = -123
reverseNum = x.toString().split("").reverse()
//console.log(reverseNum)
let comp = 0
for (let index = 0; index < reverseNum.length; index++) {
    if(reverseNum[index] === '-'){
        reverseNum.splice(index,1)
        reverseNum.splice(0,0,'-')
        reverseResult = reverseNum.join('')
        console.log(reverseResult)
        if(Math.pow(-2,31) <= parseInt(reverseResult,10) && parseInt(reverseResult,10) <= Math.pow(2,31) - 1){
            reverseResult
            return reverseResult
        }
        else{
            console.log('cero')
            return 0
        }
    } 
}

reverseResult = reverseNum.join('')
if(Math.pow(-2,31) <= parseInt(reverseResult,10) && parseInt(reverseResult,10) <= Math.pow(2,31) - 1){
    console.log(reverseResult)
    return reverseResult
}
else{
    console.log('cero')
    return 0
}




 

