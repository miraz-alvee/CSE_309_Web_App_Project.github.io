import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="bg-gray-900 text-white px-8 py-8 header-position">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="ml-2 text-5xl font-bold">UniFood</h1>
                    </div>
                    <div className="flex justify-between items-center space-x-4">
                        <Link to="/" className="hover:text-yellow-500 text-2xl font-bold">
                            Home</Link>
                        <Link to="/menu" className="hover:text-yellow-500 text-2xl 
                        font-bold">Menu</Link>
                        <Link to="/contract" className="hover:text-yellow-500 text-2xl
                         font-bold">Contract</Link>
                        <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600
                         text-white px-6 py-4 rounded font-medium">Login</Link>
                    </div>
                </nav>
            </header>

            <Outlet></Outlet>
            <footer className="bg-gray-900 text-white py-8 mt-20">
                <div className="container bg-gray-800 mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-center">Independent University,Bangladesh</h2>
                            <p className="text-gray-400">Plot 16 Aftab Uddin Ahmed Rd, Dhaka 1229</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto text-center sm:text-left">
                        <h3 className="text-xl font-bold text-white mb-4">Menu</h3>
                        <ul className="list-none">
                            <li><a href="#" className="text-gray-300
                             hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300
                             hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300
                             hover:text-white">Menu</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Locations</a></li>
                            <li><a href="#" className="text-gray-300
                             hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                        <form>
                            <div className="flex justify-center items-center">
                                <input type="email" placeholder="Enter your email address" className="bg-gray-700 rounded-l-lg px-4 py-2 w-56 sm:w-auto text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="submit" className="bg-blue-500
                                 hover:bg-blue-600 rounded-r-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Header;