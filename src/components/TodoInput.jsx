function TodoInput({inputValue,setInputvalue,addTodo}){
    return(
        <>
        <div className="mb-6">
            <div className="flex gap-2 ">
                 <input type="text" value={inputValue} 
            onChange={(e)=>setInputvalue(e.target.value)} 
            placeholder="what you want to do" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            <button onClick={addTodo}  className="px-6 py-2 bg-blue-500 text-white rounded-lg
             hover:bg-blue-600 transition">Add</button>
            </div>
           
        </div>
        </>
    );
}
export default TodoInput