import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="bg-white p-4 flex justify-between">
            <h1 className="font-bold text-lg">ToDo App</h1>
            <nav className="space-x-4">
                <Link to='/' className="hover:underline">Todos</Link>
                <Link to='/login' className="hover:underline">Login</Link>
                <Link to='/signup'className="hover:underline">Signup</Link>
            </nav>
        </header>
    )
}
export default Header;