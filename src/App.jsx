import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import Filterbar from './components/Filterbar';
import { useState,useEffect } from 'react'
function App() {
  const [todos,setTodos]=useState(()=>{
    const saved=localStorage.getItem("todos");
    return saved ?JSON.parse(saved):[];
  }
  ); //lazy initializer
  const [inputValue,setInputvalue]=useState('');
  const[filter,setFilter]=useState("all");
  const filteredTodos=
    todos.filter(todo=>{
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
    })
  const addTodo=()=>{
    if (inputValue.trim() === '') return;
    const newTodo={
      id:Date.now(),
      text:inputValue,
      completed:false
    };
  
  setTodos([...todos,newTodo]);
  setInputvalue('');
  }
  const toggleTodo=(id)=>{
    setTodos(todos.map(todo=>todo.id===id ?
      {...todo,completed:!todo.completed}:todo));
  }
 const deleteTodo = (id) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};
const updateTodo=(id,newText)=>{
  setTodos(prev=>prev.map(todo=>todo.id===id?{...todo,text:newText}:todo))
};
useEffect(()=>{
   console.log("Saving todos:", todos);
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("todos"));
  if (saved) setTodos(saved);
}, []);

const clearCompleted=()=>{setTodos(todos.filter(todo=>!todo.completed))};
const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <>
    <div className="bg-gray-100 min-h-screen m-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">My To Do App</h1>
      </div>
      <div className=" flex justify-between items-center  max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Filterbar filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
         <p className="text-gray-600 mt-2">{remaining} tasks left</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6"> 
         <TodoInput inputValue={inputValue}         
          setInputvalue={setInputvalue}
          addTodo={addTodo}></TodoInput>
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}></TodoList>
      </div>
  
    </div>
    
    </>
  )
}

export default App
