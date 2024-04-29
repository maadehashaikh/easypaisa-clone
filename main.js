import inquirer from 'inquirer';
async function displaySelectedChoice() {
    const choices = ['Money Transfer', 'Bill Payment', 'EasyLoad Bundles', 'Cash Back', 'Savings', 'Send Money'];
    let totalBalance = 20000;
    // bill mai account num day kay paisay -
    // bundles mai choices say deduct kar skty hain amount
    // send money balance - money
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'selectedChoice',
        message: 'Select a choice:',
        choices: choices
    });
    if (answer.selectedChoice == "Money Transfer") {
        const money_transfer_amount = await inquirer.prompt({
            type: 'input',
            name: 'amount',
            message: 'Enter the amount you want to transfer :'
        });
        let transferMoney = money_transfer_amount.amount;
        let remaining_balance = totalBalance - transferMoney;
        console.log(`Your total balance was ${totalBalance} and now you have ${remaining_balance} amount of money remaining`);
        totalBalance = remaining_balance;
        console.log(totalBalance);
    }
    if (answer.selectedChoice == "Bill Payment") {
        const bill_Payment_amount = await inquirer.prompt([{
                type: 'input',
                name: 'bill_amount',
                message: "Enter Money you have to pay :"
            },
            {
                type: 'input',
                name: 'bill_id',
                message: "Enter you bill id :"
            }]);
        let remaining_amount = totalBalance - (bill_Payment_amount.bill_amount);
        console.log(`You have paid bill of ${bill_Payment_amount.bill_amount}RS and remaining amount in your account is : ${remaining_amount}`);
        totalBalance = remaining_amount;
        console.log(totalBalance);
    }
    if (answer.selectedChoice == "EasyLoad Bundles") {
        const bundle_choices = ["weekly bundles : 200RS", "monthly bundles:550RS", "daily bundles:120RS", "super card:1000RS",
            "All in one deal:2300RS", "call bundles:600RS"];
        const selected_bundle = await inquirer.prompt({
            type: 'list',
            name: 'bundle',
            message: 'Select any Bundle :',
            choices: bundle_choices
        });
        console.log(selected_bundle.bundle);
        if (selected_bundle.bundle == "weekly bundles : 200RS") {
            totalBalance -= 200;
            console.log(totalBalance);
        }
        else if (selected_bundle.bundle == "monthly bundles:550RS") {
            totalBalance -= 550;
            console.log(totalBalance);
        }
        else if (selected_bundle.bundle == "daily bundles:120RS") {
            totalBalance -= 120;
            console.log(totalBalance);
        }
        else if (selected_bundle.bundle == "super card:1000RS") {
            totalBalance -= 1000;
            console.log(totalBalance);
        }
        else if (selected_bundle.bundle == "All in one deal:2300RS") {
            totalBalance -= 2300;
            console.log(totalBalance);
        }
        else if (selected_bundle.bundle == "call bundles:600RS") {
            totalBalance -= 600;
            console.log(totalBalance);
        }
        else {
            console.log("Invalid Choice");
        }
    }
}
displaySelectedChoice();
