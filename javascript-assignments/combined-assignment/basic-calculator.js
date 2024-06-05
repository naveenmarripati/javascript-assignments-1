let operator=prompt("user operator - + / * %")

let num_11=prompt("user num1")
let num_21=prompt("user num2")
let num_1=parseInt(num_11)
let num_2=parseInt(num_21)

if ((operator==="+" || operator==="/" || operator==="-" || operator==="*" || operator==="%")){
    if (String(num_1) !== "NaN"){
        if (String(num_2) !== "NaN"){
            if (operator==="+"){
                console.log(`${num_1+num_2}`)
            }
            if (operator==="-"){
                console.log(`${num_1-num_2}`)
            }
            if (operator==="*"){
                console.log(`${num_1*num_2}`)
            }
            if (operator==="/"){
                console.log(`${num_1/num_2}`)
            }
            if (operator==="%"){
                console.log(`${num_1/num_2}`)
            }
        }else{
            console.log(`${num_21} is not number`)
        }
    }else{
        console.log(`${num_11} is not number`)
    }
}else{
    console.log(`${operator} this is not operator. operators are + - / % *`)
}