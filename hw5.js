let arr=[25,66,36,26,58,96,74,585,258,369,145]
var sum = 0;
for(let i=0; i < arr.length; i++){
    if(arr[i]%2 == 0){
        console.log(arr[i])
        sum += arr[i]
    }
}
console.log('Thin is even number')
console.log(sum)