
let num1 = [4,1,2,3]
let num2 = [4,1,2,3]

function compair(one : number,two : number) {
if (one > two) {
    return(true)
}else if (two > one) {
    return(false)
} else {
return(false)
}
}

function sort() {
   
}


let temp = 0
function swap(array : any,one : any,two : any) {
temp = array[one]
array[one] = array[two]
array[two] = temp
}
sort()


temp = num1[0]
num1[0] = num1[1]
num1[1] = temp

game.splash(num1)