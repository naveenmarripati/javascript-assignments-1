let arr=[70.8,34.8,20.9,84,55.4];

let highest_score=arr[0];
let lowest_score=arr[0];

let len=arr.length;

let sum=0;

for (let i=0; i<len; i++){
    sum+=arr[i]
    if (arr[i]>highest_score){
        highest_score=arr[i]
    }
    if (arr[i]<lowest_score){
        lowest_score=arr[i]
    }
}
let avg=sum/len
console.log(`the highest score of list of floating-point numbers is ${highest_score}`)
console.log(`the lowest score of list of floating-point numbers is ${lowest_score}`)
console.log(`The average score of list of floating-point numbers is ${avg.toFixed(3)}`)