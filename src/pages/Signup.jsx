function Signup(){
    return(
        <div className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-700">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-centre mb-4 hover:text-violet-800">Signup</h2>
                <input type="text" placeholder="name" className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                <input type="email" placeholder="email" className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                <input type="password" placeholder="password" className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Create Account</button>
            </div>
        </div>
    )
}
export default Signup;
