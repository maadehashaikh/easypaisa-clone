import inquirer from 'inquirer';
async function displaySelectedChoice() {
    let exit = true;
    while (exit) {
        const choices = ['Money Transfer', 'Bill Payment', 'EasyLoad Bundles', 'Cash Back', 'Savings', 'Exit'];
        let totalBalance = 20000;
        var save_amount = 0;
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
        else if (answer.selectedChoice == "Bill Payment") {
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
        else if (answer.selectedChoice == "EasyLoad Bundles") {
            const percentage = 10;
            console.log(`We have a 'Flash Sale' of ${percentage}% on Every Bundle just grab and save money !!!!`);
            const bundle_choices = ["weekly bundles : 200RS", "monthly bundles:550RS", "daily bundles:120RS", "super card:1000RS",
                "All in one deal:2300RS", "call bundles:600RS"];
            const selected_bundle = await inquirer.prompt({
                type: 'list',
                name: 'bundle',
                message: 'Select any Bundle :',
                choices: bundle_choices
            });
            if (selected_bundle.bundle == "weekly bundles : 200RS") {
                totalBalance -= 200;
                let calc_percentage1 = 200 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage1} on sale `);
                totalBalance += calc_percentage1;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage1;
            }
            else if (selected_bundle.bundle == "monthly bundles:550RS") {
                totalBalance -= 550;
                let calc_percentage2 = 550 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage2} on sale `);
                totalBalance += calc_percentage2;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage2;
            }
            else if (selected_bundle.bundle == "daily bundles:120RS") {
                totalBalance -= 120;
                let calc_percentage3 = 120 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage3} on sale `);
                totalBalance += calc_percentage3;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage3;
            }
            else if (selected_bundle.bundle == "super card:1000RS") {
                totalBalance -= 1000;
                let calc_percentage4 = 1000 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage4} on sale `);
                totalBalance += calc_percentage4;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage4;
            }
            else if (selected_bundle.bundle == "All in one deal:2300RS") {
                totalBalance -= 2300;
                let calc_percentage5 = 2300 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage5} on sale `);
                totalBalance += calc_percentage5;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage5;
            }
            else if (selected_bundle.bundle == "call bundles:600RS") {
                totalBalance -= 600;
                let calc_percentage6 = 600 * (percentage / 100);
                console.log(`You have saved RS ${calc_percentage6} on sale `);
                totalBalance += calc_percentage6;
                console.log(`Now your total balance left is :${totalBalance}`);
                save_amount += calc_percentage6;
            }
            else {
                console.log("Invalid Choice");
            }
        }
        else if (answer.selectedChoice == "Cash Back") {
            console.log(`The amount you have saved from sale is : ${save_amount}`);
        }
        else if (answer.selectedChoice == "Savings") {
            console.log(`you have saved RS ${save_amount} from all your purchases`);
        }
        else if (answer.selectedChoice == "Exit") {
            exit = false;
        }
    }
}
displaySelectedChoice();
