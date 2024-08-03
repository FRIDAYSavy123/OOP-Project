#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

// Create class { class is a group of objects }
class Person {
  private _personality: string;

  constructor() {
    this._personality = 'Mystery';
  }

  // User input
  userInput(input: string) {
    // if-else statements
    if (input.includes('talk to others about myself')) {
      this._personality = 'happily';
    } else if (input.includes('keep quiet and don’t ask questions')) {
      this._personality = 'talk rudely';
    }
  }

  // Return function
  getPersonality() {
    return this._personality;
  }
}

// Create main class
class Main {
  public async main() {
    // Await function call
    const answer = await inquirer.prompt({
      // Object create
      type: 'list',
      name: 'choice',
      message: chalk.yellow('Tell your behaviour?'),
      choices: [
        '1. talk to others about myself',
        '2. keep quiet and don’t ask questions',
      ],
    });

    // Create a person class instance
    let myPerson = new Person();

    myPerson.userInput(answer.choice);

    // Output response
    console.log(`You are ${myPerson.getPersonality()}`);
  }
}

// Create and run the Main class instance
const myObject = new Main();
myObject.main();
