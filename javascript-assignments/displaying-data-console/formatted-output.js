let first_name=prompt("first user input")
let last_name=prompt("second user input")
let year=prompt("throd user input")



let typeChange=parseInt(year);

if (typeof(first_name)==="string" && typeof(last_name)==="string" && typeof(typeChange)==="number" && String(typeChange)!=="NaN"){
    if (year.length === 4 && typeChange<=2024){
        age=2024-typeChange
        console.log(`${first_name} ${last_name} now your age is ${age}`)
    }else{
        console.log("Give the valid year the year has only four numbers or give the year below 2024")
    }
}
else{
    console.log("give the valid inputs")
}
