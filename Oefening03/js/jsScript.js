import todos from "../data/todos.json" with { type: 'json' };
function getCompleted(allTodos){
    let output = ""
    for(let i =0; i < allTodos.length;i++)
        if (allTodos[i].completed) {
            output+=allTodos[i].title + "";
        }
    console.log(output);
}

getCompleted(allTodos);

// console.log(todos);