import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function NavBar1() {
    const [navbar, setNavbar] = useState(false);

  
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-center py-1 md:py-3 px-4  lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <h1 className="text-xl md:text-2xl font-extrabold  lg:hidden  text-sky-600">ATIQ</h1>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-green-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center md:flex justify-center space-y-8   md:space-x-6 md:space-y-0">
                            <NavLink  to='/' className={({isActive}) => isActive? "text-red-600":"text-yellow-500"} >
                              Home
                            </NavLink>
                            <NavLink  to='/gallery' className={({isActive}) => isActive? "text-red-600":"text-yellow-500"}>
                               Gallery
                            </NavLink>
                            <Link  to='/' className="hidden lg:block">
                                ATIQ
                            </Link>
                            <NavLink   to='/destination' className={({isActive}) => isActive? "text-red-600":"text-yellow-500"}>
                               Destination
                            </NavLink>
                            <NavLink  to='/about' className={({isActive}) => isActive? "text-red-600":"text-yellow-500"}>
                                About
                            </NavLink>
                            <NavLink  to='/extra' className={({isActive}) => isActive? "text-red-600":"text-yellow-500"}>
                                Extra
                            </NavLink>
                        </ul>

                        
                    </div>
                </div>
                
            </div>
        </nav>
    );
}