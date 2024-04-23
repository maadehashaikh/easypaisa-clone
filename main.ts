import inquirer from 'inquirer';

async function addTwoNumbers() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value: string) => {
                const parsed = parseInt(value);
                return !isNaN(parsed) ? true : 'Please enter a valid number';
            }
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value: string) => {
                const parsed = parseInt(value);
                return !isNaN(parsed) ? true : 'Please enter a valid number';
            }
        }
    ];

    const answers = await inquirer.prompt(questions);
    const num1 = parseInt(answers.num1);
    const num2 = parseInt(answers.num2);

    console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
}

addTwoNumbers();
