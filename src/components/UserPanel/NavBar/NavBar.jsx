import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    const links = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/coding-problems">Coding Problems</NavLink>
        </li>
        <li>
            <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
            <Link className="bg-[#5553FF] uppercase px-4 py-2 rounded-full text-white hover:bg-[#3e3bf9] hover:text-white">Login</Link>
        </li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-[white] drop-shadow-lg">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link to="/">TechBarik</Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {
                        links
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;