import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import share from '../../assets/images/Group 6.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="navbar bg-[#2042B6] px-4 lg:px-8">
                <div className="flex-1">
                    <a className="text-xl">
                        <img src={logo} alt="Logo" className="h-8 lg:h-12" />
                    </a>
                </div>
                <div className="flex items-center">
                    <div className="text-white mr-2 lg:mr-4">
                        <img src={share} className='border rounded-full p-2 h-8 w-8 lg:h-10 lg:w-10' />
                    </div>
                    <button className="hidden lg:block btn bg-[#2042B6] rounded-full mr-2 lg:mr-4 text-white font-normal text-xs lg:text-base hover:bg-blue-900">Download the 2024 Report</button>
                    <button onClick={toggleMenu} className="btn btn-square text-white bg-[#2042B6] border-none hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="absolute font2 top-18 left-36 w-60 bg-white shadow-lg rounded-lg z-50 lg:top-20 lg:left-[68rem] lg:w-64">
                    <ul className="py-2 text-center lg:text-left">
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">The WPPOOL Index</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">All Companies</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Potential Future Listings</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">State of USA</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Stories & Ideas</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">About WPPOOL</a></li>
                        <li className="px-4 py-2 hover:bg-gray-200"><a href="#">WPPOOL Portfolio Companies</a></li>
                        <li className="px-4 py-2 text-[#2042B6] hover:bg-gray-200"><a href="#">Visit WPPOOL</a></li>
                        <li className="px-4 py-2 lg:hidden"><button className="btn bg-[#2042B6] rounded-full text-white font-normal hover:bg-blue-900">Download the 2024 Report</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
