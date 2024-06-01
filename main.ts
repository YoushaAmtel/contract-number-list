/*import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.blue("Hello! Contact number menu"));

interface Contact {
    serialNo: number;
    name: string;
    phone: string;
}

let contacts: Contact[] = [];
let contactSerialNo: number = 1;

async function contractMenuInput(): Promise<void> {
    const inputContact = await inquirer.prompt<{ contact: string }>({
        type: "list",
        name: "contact",
        message: "Choose an option",
        choices: ["Add contact", "View contacts", "Close menu"]
    });

    switch (inputContact.contact) {
        case "Add contact":
            await addContact();
            break;
        case "View contacts":
            viewContacts();
            break;
        case "Close menu":
            console.log(chalk.hex('#FFDAB9')("Goodbye!")); // Using hex code for peach color
            return;
    }

    await contractMenuInput(); // loop back to the menu
}

async function addContact(): Promise<void> {
    const newContact = await inquirer.prompt<{ name: string; phone: string }>([
        {
            type: "input",
            name: "name",
            message: "Enter contact name:"
        },
        {
            type: "input",
            name: "phone",
            message: "Enter contact phone number:"
        }
    ]);

    contacts.push({
        serialNo: contactSerialNo++,
        ...newContact
    });

    console.log(chalk.green("Contact added successfully!"));
}

function viewContacts(): void {
    if (contacts.length === 0) {
        console.log(chalk.red("No contacts found."));
    } else {
        console.log(chalk.blue("Contacts List:"));
        contacts.forEach(contact => {
            console.log(chalk.blue(`Serial No: ${contact.serialNo}`));
            console.log(chalk.blue(`Name: ${contact.name}`));
            console.log(chalk.blue(`Phone: ${contact.phone}`));
        });
    }
}

*///contractMenuInput();
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.blue("Hello! Contact number menu"));

interface Contact {
    serialNo: number;
    name: string;
    phone: string;
}

let contacts: Contact[] = [];
let contactSerialNo: number = 1;

async function contractMenuInput(): Promise<void> {
    const inputContact = await inquirer.prompt<{ contact: string }>({
        type: "list",
        name: "contact",
        message: "Choose an option",
        choices: ["Add contact", "View contacts", "Close menu"]
    });

    switch (inputContact.contact) {
        case "Add contact":
            await addContact();
            break;
        case "View contacts":
            viewContacts();
            break;
        case "Close menu":
            console.log(chalk.hex('#FFDAB9')("Goodbye!")); // Using hex code for peach color
            return;
    }

    await contractMenuInput(); // loop back to the menu
}

async function addContact(): Promise<void> {
    const newContact = await inquirer.prompt<{ name: string; phone: string }>([
        {
            type: "input",
            name: "name",
            message: "Enter contact name:",
            validate: (input) => {
                if (/^[a-zA-Z\s]+$/.test(input)) {
                    return true;
                } else {
                    return chalk.red("Please input name in alphabets only!");
                }
            }
        },
        {
            type: "input",
            name: "phone",
            message: "Enter contact phone number:"
        }
    ]);

    contacts.push({
        serialNo: contactSerialNo++,
        ...newContact
    });

    console.log(chalk.green("Contact added successfully!"));
}

function viewContacts(): void {
    if (contacts.length === 0) {
        console.log(chalk.red("No contacts found."));
    } else {
        console.log(chalk.blue("Contacts List:"));
        contacts.forEach(contact => {
            console.log(chalk.blue(`Serial No: ${contact.serialNo}`));
            console.log(chalk.blue(`Name: ${contact.name}`));
            console.log(chalk.blue(`Phone: ${contact.phone}`));
        });
    }
}

contractMenuInput();
