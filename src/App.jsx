import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import Filterbar from './components/Filterbar';
import { FaSearch,FaBroom } from 'react-icons/fa';
import { PiListChecksFill } from "react-icons/pi";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainLayout from './layout/MainLayout';
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
    //const[showSearch,setShowsearch]=useState(false);
const[searchText,setSearchtext]=useState("");
  const searchedTodos=filteredTodos.filter(todo=>todo.text.toLowerCase().startsWith(searchText.toLowerCase()));
  const addTodo=()=>{
    if (inputValue.trim() === '') return;
    const newTodo={
      id:Date.now(),
      text:inputValue,
      completed:false
    };
  
  setTodos([...todos,newTodo]);
  setInputvalue('')
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
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/' 
    element={
          <div className="flex-1 p-12 bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-700  min-h-screen  flex items-centre justify-centre">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-44 ml-12 items-center'>     
        <div className='bg-white w-full max-w-xl min-h-fit ml-28 my-auto rounded-xl shadow-2xl'>
        <div className="max-w-2xl mx-auto p-6 tracking-tight text-slate-800  transition-all duration-700 ease-out hover:translate-x-2 hover:text-violet-700 flex justify-start items-center gap-3">
      <h1 className="text-4xl mt-1 font-bold text-center mb-1 ">To Do List</h1>
      <PiListChecksFill className=" w-8 h-10 self-center mt-2"/>
      </div>
        
        <div className=" max-w-2xl mx-auto flex items-centre gap-3">
      <FaSearch className='text-violet-800 self-center w-5 h-5  mt-2'/>
    <input
      type="text"
      placeholder="Search Todos..."
      value={searchText}
      onChange={(e)=>setSearchtext(e.target.value)}
      className='w-full mt-2 mr-6 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-violet-500'
    />
      </div>
      
      
      <div className=" flex justify-between items-center  max-w-2xl mx-auto gap-8 p-6">
        <Filterbar filter={filter} setFilter={setFilter}/>
      </div>
      <div className="max-w-2xl mx-auto p-6"> 
         <TodoInput inputValue={inputValue}         
          setInputvalue={setInputvalue}
          addTodo={addTodo}></TodoInput>
          <TodoList todos={searchedTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}></TodoList>
      </div>
      <div className="flex justify-between items-center  max-w-2xl mx-auto p-6">
       
            <button onClick={clearCompleted} className="flex items-center gap-2 px-4 py-2 rounded-lg transition
             bg-red-500 hover:bg-red-600 text-white "><FaBroom/>Clear Complete</button>
              <p className="text-gray-600 mt-2 ">{remaining} tasks left</p>
      </div>
      </div>
      <div className="text-white text-centre md:text-left ml-1 space-y-4">
        <h2 className='block text-4xl md:text-7xl font-extrabold leading-tight'> Build
          <span className='block'>
            <span className='  text-orange-600'>To-Do</span>&nbsp;List
          </span>
          </h2>
        <h3 className="text-3xl font-semibold">With React</h3>
      </div>
      </div>
      
    </div>
    }/>
    </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
