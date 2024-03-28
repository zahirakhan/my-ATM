#! /usr/in/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPinCode = 7652;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.blue("Enter Your Pin Number"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPinCode) {
    console.log(chalk.greenBright("Correct Pin Code"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.blue("Please Select Option"),
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow(" Enter Your Amount"),
                type: "number",
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log(chalk.bgRedBright("Insufficient Balance!")); //assignment 1 user insufficient balance
        }
        else if (myBalance -= amountAnswer.amount) {
            console.log(chalk.green(`Your Remaining Balance is : ${myBalance}`));
        } //assignment 2 template literals
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(chalk.green(`Your Balance is : ${myBalance}`));
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: chalk.blue("How Much amount You Want to Fast Cash"),
                type: "list",
                choices: [1000, 2000, 5000, 8000, 10000]
            }
        ]);
        myBalance -= fastCash.fastCash;
        console.log(chalk.green(`Your remaining balance is: ${myBalance}`)); //assignment 3 fast cash
    }
}
else {
    console.log(chalk.bgRedBright("Invalid Pin Number"));
}
