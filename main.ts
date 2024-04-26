import inquirer from 'inquirer';
async function displaySelectedChoice() {
    const choices = ['Money Transfer', 'Bill Payment', 'EasyLoad Bundles', 'Cash Back', 'Savings','Send Money'];
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


    if(answer.selectedChoice == "Money Transfer"){
      const money_transfer_amount = await inquirer.prompt({
        type:'input',
        name: 'amount',
        message: 'Enter the amount you want to transfer :'
      }
      )
      let transferMoney = money_transfer_amount.amount;
      let remaining_balance = totalBalance - transferMoney;
      console.log(`Your total balance was ${totalBalance} and now you have ${remaining_balance} amount of money remain`);
      totalBalance = remaining_balance;
    }

    if(answer.selectedChoice == "Bill Payment"){
      const bill_Payment_amount = await inquirer.prompt([{
        type:'input',
        name:'bill_amount',
        message:"Enter Money you have to pay :"
      },
      {
        type:'input',
        name:'bill_id',
        message:"Enter you bill id :"
      }]);
      let remaining_amount = totalBalance - (bill_Payment_amount.bill_amount); 
      console.log(`You have paid bill of ${bill_Payment_amount.bill_amount}RS and remaining amount in your account is : ${remaining_amount}`);
      totalBalance = remaining_amount;
    }
}
displaySelectedChoice();


console.log ("Its my easy paisa app ")
