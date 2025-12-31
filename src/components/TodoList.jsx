import TodoItem from "./TodoItem";
function TodoList({todos,toggleTodo,deleteTodo}){
    if(todos.length==0){
        return(
            <p>No todos yet! Add one above</p>
        )
    }
    return(
        <div>
            {todos.map((todo)=>(
                <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}
export default TodoList;