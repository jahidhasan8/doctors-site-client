
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('')

    return (
        <div className='h-[600px] flex justify-center items-center' >
            <div className='w-96 p-6'>
                <h2 className="text-3xl font-bold text-center">Login</h2>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("password")} />
                        <label className="label">
                            <button><span className="label-text text-red-600">Forget Password?</span></button>
                        </label>

                    </div>

                    <input className='btn btn-accent w-full max-w-xs mt-4' value='Login' type="submit" />
                </form>
                <p className='mt-4'>New to Doctors Portal? <Link className='text-secondary font-semibold' to='/signup'>Create new account</Link></p>
            </div>
        </div>
    );
};

export default Login;