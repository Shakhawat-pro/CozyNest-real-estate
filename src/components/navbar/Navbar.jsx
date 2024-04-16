import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const navLinks = <>
        <li className="active:bg-white"><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/residents">Residents</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </>
    return (
        <div className="lg:w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-4 space-y-5 shadow bg-white rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <img src="/favicon.png" alt="" />
                    <a className="btn btn-ghost text-2xl font-bold text-[#55d142]">CozyNest</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu-horizontal bg-white px-1 space-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;