import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();


    const submit = (data) => {
        axios
            .post("https://ecommerce-exercise-backend.herokuapp.com/login/", data)
            .then((res) => {
                localStorage.setItem('token', res.data.access)
                navigate('/shop')
            })
            .catch(() => setLoginError("Credenciales incorrectas"));

    }

    return (
        <div className='bg-all'>
           

            <div className='flex h-screen justify-center items-center'>
                <form className='card' onSubmit={handleSubmit(submit)}>
                    <div>
                        <h1 className='text-4xl text-center mb-3'>Login</h1>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email" className='mr-8'>Email</label>
                            <input
                                className='border-2 rounded w-9/12 m-auto'
                                {...register("email")}
                                type="email"
                                required
                            />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="password" className='mr-1'>Password</label>
                            <input
                                className='border-2 rounded w-9/12 m-auto'
                                type="password"
                                {...register("password")}
                                required
                            />
                        </div>
                        <div>
                            <p className='text-white bg-red-700'>{loginError}</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly text-center mt-4'>
                        <div className='bg-rosa-principal rounded-md w-28 h-8 mt-2'>
                            <button className='mt-1'>Log In</button>
                        </div>
                        <div className='bg-rosa-principal rounded-md w-28 h-8 mt-3'>
                            <Link className='mt-1' to={'/newuser'}>Add User</Link>
                        </div>
                    </div>

                </form>


            </div>

        </div>
    );


}




export default Login;