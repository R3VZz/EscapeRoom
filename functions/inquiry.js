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
        message: "What would you like to do next ? Good or Bad ? ",
        choices: ["Good end", "Bad end"]
    })
return response
}
