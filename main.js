import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1007;
console.log(chalk.blue("\n \t welcome to Aliza's ATM machine\n"));
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.yellow("enter your pin code"),
});
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\npin is correct,Login successfully!\n"));
    //console.log(`current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withDraw ammount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withDraw ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawMethod",
                choices: ["fastcash", "enterammount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fastcash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select ammount:",
                    choices: [1000, 2000, 3000, 4000, 8000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash}withdraw successfully`);
                console.log(`your remaining balance is:${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enterammount") {
            let ammountAns = await inquirer.prompt([
                {
                    name: "ammount",
                    type: "number",
                    message: "enter the ammount to withDraw:"
                }
            ]);
            if (ammountAns.amount > myBalance) {
                console.log("insufficient Baalance");
            }
            else {
                myBalance -= ammountAns.ammount;
                console.log(`${ammountAns.ammount}withDraw successfully`);
                console.log(`your remaining balance is:${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your amount balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("pin is incorrect"));
}
