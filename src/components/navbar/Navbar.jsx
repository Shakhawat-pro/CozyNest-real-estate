import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import 'animate.css';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    const navLinks = <>
        <li className="animate__animated animate__bounceInUp"><NavLink to="/">Home</NavLink></li>
        <li className="animate__animated animate__bounceInUp"><NavLink to="/residents">Residents</NavLink></li>
        <li className="animate__animated animate__bounceInUp"><NavLink to="/contact">Contact</NavLink></li>
        <li className="animate__animated animate__bounceInUp"><NavLink to="/profile">Profile</NavLink></li>
    </>
    return (
        <div className="lg:w-11/12 mx-auto animate__backInDown pt-4 rounded-xl">
            <div className="navbar bg-base-100 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown animate__animated animate__bounceInUp">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content flex items-center mt-3 z-10 p-4 shadow bg-white rounded-box w-[350px]">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="animate__animated animate__bounceInUp" src="/favicon.png" alt="" />
                    <a className="animate__animated animate__bounceInUp animated-delay-2s  btn btn-ghost text-2xl font-bold text-[#55d142]">CozyNest</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu-horizontal bg-white px-1 space-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end animate__animated animate__bounceInUp">
                    {
                        user ? <>
                            <div className="flex items-center space-x-6">
                                <div className="avatar">
                                    <div className="w-12 md:w-14 rounded-full ring ring-[#23BE0A] ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                                <Link to="/"><button className="btn bg-[#23BE0A] text-white" onClick={handleLogOut}>Log Out</button></Link>
                            </div>
                        </>
                            : <Link to="/login"><button className="btn bg-[#23BE0A] text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;