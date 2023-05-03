import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Add Atleast two upper case');
            return;
        }
        else if(!/(?=.*[@#$&*])/.test(password)){
            setError('Add Atleast one special charecter');
            return;
        }
        else if(password.length < 6){
            setError('Add Atleast 6 charecters in your password');
            return;

        }
    }
    return (
        <div>
            <div className="flex justify-center items-center mt-20">
                <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/5">
                    <h1 className='text-center font-bold text-3xl'>LogIn</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="username" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="********" required />
                    </div>
                    <p className='text-danger'></p>
                    <p className='text-danger'></p>
                    <div className="flex items-center justify-between mt-2">
                        <button className="btn btn-primary hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                    </div>
                    <p className='text-danger'>{error}</p>
                    <p className='text-danger'>{success}</p>

                    <p className='mt-2'>If you don't have any account ? Please <Link to="/register" className='font-bold underline'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;