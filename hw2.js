let arr=[41,25,66,33,96,40,56]

for (let i = 0; i < arr.length/2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i]
    arr[arr.length -1 -i] = temp;

}
console.log(arr)