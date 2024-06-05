let age=prompt("first user input")
let height=prompt("second user input")
let user_name=prompt("throd user input")//string

let changeType_age=Number(age)//number
let changeType_height=parseFloat(height)//float
/////number
if (typeof(changeType_age)==="number" && String(changeType_age)!=="NaN"){
    console.log(`${age} is a number`)
}else{
    console.log(`${age} is not a number`)
}
/////float
if(changeType_height%1!==0){
    console.log(`${changeType_height%1} this is the float number`)
}else{
    console.log(`${changeType_height%1} this is not a float number`)
}
let check=/^[a-zA-Z]+$/
if (typeof(user_name)==="string" && check.test(user_name)){
    console.log(`${user_name} this is the user name`)
}
else{
    console.log(`${user_name} this is not a string give the input as a letters`)
}
