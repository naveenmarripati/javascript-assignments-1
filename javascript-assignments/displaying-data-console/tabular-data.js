let user_input=prompt("user_input");
let end=prompt("user_input where it end")

let num=parseInt(user_input);
let num_end=parseInt(end);
for (let i=0; i<=num_end; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}