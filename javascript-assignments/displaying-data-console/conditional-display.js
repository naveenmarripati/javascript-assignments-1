let user_input=prompt("Number");

let num=parseInt(user_input);

if (num%2===0){
    console.log(`${num} is getting ${num%2} is even`)
}else{
    console.log(`${num} is getting ${num%2} is odd`)
}