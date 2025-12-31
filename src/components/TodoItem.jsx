function TodoItem({todo,toggleTodo,deleteTodo}){
    return(
        <>
        <div className="flex items-center gap-3 p-3 border
         border-gray-200 rounded-lg mb-2 hover:bg-gray-50">
            <input type="checkbox" checked={todo.completed} 
            onChange={()=>toggleTodo(todo.id)}  className="w-5 h-5 cursor-pointer"></input>
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{todo.text}</span>
            <button type="button" onClick={()=>deleteTodo(todo.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
        </div>
        </>
    )
}
export default TodoItem;