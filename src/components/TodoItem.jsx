import { useState } from "react";
import { FaEdit,FaTrash,FaSave}from "react-icons/fa";
function TodoItem({todo,toggleTodo,deleteTodo,updateTodo}){
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const handleSave = () => {
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };


    return(
        <>
        <div className="flex items-center gap-3 p-3 border
         border-gray-200 rounded-lg mb-2 hover:bg-gray-50">
            {!isEditing &&<input type="checkbox" checked={todo.completed} 
            onChange={()=>toggleTodo(todo.id)}  className="w-5 h-5 cursor-pointer"></input>}
            {isEditing ?
            (<input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} onBlur={handleSave} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-yellow-500"></input>)
            : 
            (<span className={`flex-1 transition-all duration-300 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{todo.text}</span> )} 
            {isEditing ?
            (<button type="button" onClick={handleSave} className=" flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded
             hover:bg-green-600 transition"><FaSave/>Save</button>)
             :
             (<><button type="button" onClick={()=>setIsEditing(true)} className=" flex items-center gap-2 px-3 py-1 bg-yellow-500
              text-white rounded hover:bg-yellow-600 transition"><FaEdit/>Edit</button>
            <button type="button" onClick={()=>deleteTodo(todo.id)} className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded
             hover:bg-red-600 transition"><FaTrash/>Delete</button></>)}      
            
        </div>
        </>
    )
}
export default TodoItem;