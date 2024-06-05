let user_greeting=prompt("user greeting");
let time=parseInt(user_greeting);
if (time<=11){
    console.log("Good Morning")
}else if(time>=12 && time<=16){
    console.log("Good Afternoon")
}
else if(time>=17 && time<=20 ){
    console.log("Good Evening")
}else{
    console.log("Good Night")
}
