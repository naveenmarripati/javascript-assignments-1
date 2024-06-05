let arr=[1,12,32,4,56,73,11];

let len=arr.length;
let max=arr[0]

//maximum
for (let i=1; i<len; i++){
    if (arr[i]>max){
        max=arr[i]
    }
}
console.log(max)

//minimum
for (let i=1; i<len; i++){
    if (arr[i]<max){
        max=arr[i]
    }
}
console.log(max)

//sum
let sum=0
for (let i=1; i<len; i++){
    sum+=arr[i]
}
console.log(sum)

//avg
for (let i=1; i<len; i++){
    sum+=arr[i]
}
console.log(sum/len)
