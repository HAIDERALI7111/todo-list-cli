#! /usr/bin/env node
import inquirer from "inquirer";
//todos array
//function
//operations
let todos = ["Honda Civic", "Toyota Corolla", "Suzuki Ciaz", "Mitsubishi Lancer"];
let exit = (true);
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select An Operation",
            name: "select",
            choices: ["add", "Update", "View", "Delete", "exit"],
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item to Todo",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select An Item For Update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item to Todo",
                name: "todo",
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(todos);
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select An Item For Update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (ans.select == "exit") {
            exit = (false);
        }
    } while (exit);
}
createTodo(todos);
