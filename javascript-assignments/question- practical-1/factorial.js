
function call(num){
    if (typeof(num)==="number" && String(num)!=="NaN"){
        let i=1
        let sum=1;
        while(i<=num){
            sum*=i;
            i++
        }
        return `the factorial of ${num} is ${sum}`
    }else{
        return `${num} this is not a number`
    }
}



let user_input=prompt("give the number");
let num=parseInt(user_input)
let call_1=call(num);
console.log(call_1)