import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import 'animate.css';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    const [showTooltip, setShowTooltip] = useState(false);
    // console.log(showTooltip);
    const navLinks = <>
        <li data-aos="fade-up" data-aos-delay="50" className=""><NavLink to="/">Home</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="100" className=""><NavLink to="/residents">Residents</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="100" className=""><NavLink to="/booking">Booking</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="150" className=""><NavLink to="/contact">Contact</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="200" className=""><NavLink to="/profile">Profile</NavLink></li>
    </>
    return (
        <div className="lg:w-11/12 mx-auto animate__backInDown pt-4 rounded-xl">
            <div className="navbar bg-base-100 rounded-xl">
                <div data-aos="fade-up" data-aos-delay="50" className="navbar-start">
                    <div className="dropdown animate__animated animate__bounceInUp">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content flex items-center mt-3 z-10 p-4 shadow bg-white rounded-box w-[350px]">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="" src="/favicon.png" alt="" />
                    <Link to='/'>
                        <p className="  btn btn-ghost text-2xl font-bold text-[#55d142]">CozyNest</p>
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu-horizontal bg-white px-1 space-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end animate__animated animate__bounceInDown">
                    {
                        user ? <>
                            <div className="flex items-center space-x-2 md:space-x-6">
                                <div className="avatar relative"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}>
                                    <div data-aos="zoom-out" data-aos-delay="500" className="w-10 md:w-14 rounded-full ring ring-[#23BE0A] ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                    {showTooltip && (
                                        <div data-aos="fade-left" data-aos-delay="60" className="tooltip absolute top-[-10px] right-16 bg-[#23BE0A] p-1 pl-2 rounded-md rounded-l-full text-white">
                                            <span data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">{user.displayName}</span>
                                        </div>
                                    )}
                                </div>
                                <Link to="/"><button className="btn bg-[#23BE0A] text-white max-sm:w-16" onClick={handleLogOut}>Log Out</button></Link>
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