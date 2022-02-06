import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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
        <div>

            <div>
                <h1 className='text-4xl'>Login</h1>
            </div>

            <div className='flex justify-center m-20'>

                <form action="" onSubmit={handleSubmit(submit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            className='border-2 border-black ml-2'
                            {...register("email")}
                            type="email"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            className='border-2 border-black ml-2 mt-2'
                            type="password"
                            {...register("password")}
                            required
                        />
                    </div>

                    {loginError}

                    <button className='bg-orange-100 rounded-md w-24 mt-2'>Log In</button>
                </form>
            </div>

        </div>
    );


}




export default Login;