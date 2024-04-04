import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 1007;

console.log("welcome to Aliza's ATM machine");
let pinAnswer = await inquirer.prompt(
    {
        name:"pin",
        type:"number",
        message: "enter your pin code",

    }
);
if(pinAnswer.pin === myPin){
    console.log("pin is correct,Login successfully!");
    //console.log(`current Account Balance is ${myBalance}`)


let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message:"select an operation:",
        choices:["withDraw ammount", "check balance"]
    }
])
if(operationAns.operation ==="withDraw ammount"){
    let ammountAns = await inquirer.prompt([
        {
            name:"ammount",
            type:"number",
            message:"enter the ammount to withDraw:"
        }
        
    ])
if(ammountAns.amount > myBalance){
    console.log("insufficient Baalance");
}
else{
    myBalance -= ammountAns.ammount;
    console.log(`${ammountAns.ammount}withDraw successfully`);
    console.log(`your remaining balance is:${myBalance}`);
}
}
else if(operationAns.operation === "check balance"){
    console.log(`your amount balance is: ${myBalance}`);
}}
else{
    console.log("pin is incorrect");
}

