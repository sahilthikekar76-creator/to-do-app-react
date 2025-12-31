import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import { useState } from 'react'
function App() {
  const [todos,setTodos]=useState([]);
  const [inputValue,setInputvalue]=useState('');
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
  return (
    <>
    <div className="bg-gray-100 min-h-screen m-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My To Do App</h1>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6"> 
         <TodoInput inputValue={inputValue}         
          setInputvalue={setInputvalue}
          addTodo={addTodo}></TodoInput>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
      </div>
   
    </div>
    
    </>
  )
}

export default App
