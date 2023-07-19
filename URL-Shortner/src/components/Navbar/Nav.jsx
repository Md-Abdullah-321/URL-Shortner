import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-slate-50 py-4">
            <ul className="flex md:w-1/4 mx-auto justify-around items-center">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/edit-or-delete'>Edit & Delete</NavLink>
                </li>
                <li>
                    <NavLink to='/history'>History</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;