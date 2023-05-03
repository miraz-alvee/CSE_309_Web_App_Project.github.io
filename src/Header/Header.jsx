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

            <footer class="bg-gray-900 text-white py-8 mt-20">
                <div class="container mx-auto flex flex-wrap justify-between">
                    <div class="flex flex-col items-start">
                        <h2 class="text-2xl font-bold mt-10 mb-4">Independent University, Bangladesh</h2>
                        <p class="text-gray-400">Plot 16 Aftab Uddin Ahmed Rd, Dhaka 1229</p>
                    </div>
                    <div class="flex flex-col items-center sm:items-start">
                        <h3 class="text-xl font-bold mb-4">Menu</h3>
                        <ul class="list-none">
                            <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Menu</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Locations</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center sm:items-end">
                        <h3 class="text-xl font-bold mb-4">Newsletter</h3>
                        <form class="flex flex-col sm:flex-row">
                            <input type="email" placeholder="Enter your email address" class="bg-gray-700 rounded-l-lg px-4 py-2 w-full sm:w-auto text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0" />
                            <button type="submit" class="bg-blue-500 hover:bg-blue-600 rounded-r-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Header;