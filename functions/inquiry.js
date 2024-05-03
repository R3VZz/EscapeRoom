import inquirer from "inquirer";

export const getDirection = async () => {
    let { direction } = await inquirer.prompt({
        name: "direction",
        type: "list",
        message: "Select a direction",
        choices: ["left", "right"]
    })
    return direction
}

export const selectAction = async () => {
    let { response } = await inquirer.prompt({
        name: "response",
        type: "list",
        message: "Attack or Heal",
        choices: ["Attack", "Heal"]
    })
    return response
}

export const retry = async () => {
    let { response } = await inquirer.prompt({
        name: "response",
        type: "list",
        message: "Do you want to retry?",
        choices: ["Yes", "No"]
    })
    return response
}

export const getName = async () => {
    let { username } = await inquirer.prompt({
        name: "username",
        type: "input",
        message: "What is your name?",
    })
return username
}

export const selectEnding = async () => {
    let { response } = await inquirer.prompt({
        name: "response",
        type: "list",
        message: `Derek the Dementor lies dead on the ground. You've fought your way from the kidneys to the brain.
        You ponder what to do next... The two ideas that occur to you are:`,
        choices: ["Tickle brain", "Poke brain"]
    })
return response
}

export const continuey = async () => {
    let { response } = await inquirer.prompt({
        name: "response",
        type: "list",
        message: "",
        choices: ["Begin adventure"]
    })
    return response
}
