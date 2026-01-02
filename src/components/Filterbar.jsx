
function Filterbar({filter,setFilter}){
    return(
        <>
            <div className="flex justify-center  gap-4">
         <button onClick={() => setFilter("all")} 
            className={`px-4 py-2 rounded-lg transition 
          ${filter === "all" 
            ? "bg-blue-500 text-white shadow-md" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>All</button>
      <button onClick={() => setFilter("active")} 
              className={`px-4 py-2 rounded-lg transition 
          ${filter === "active" 
            ? "bg-blue-500 text-white shadow-md" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>Active</button>
       <button onClick={() => setFilter("completed")} 
              className={`px-4 py-2 rounded-lg transition 
          ${filter === "completed" 
            ? "bg-blue-500 text-white shadow-md" 
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>Completed</button>

    </div>        
        </>
    )
    
}
export default Filterbar;