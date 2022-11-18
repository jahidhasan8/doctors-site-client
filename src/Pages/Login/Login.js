
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = data => {

    }

    return (
        <div className='h-[600px] flex justify-center items-center' >
            <div className='w-96 p-6'>
                <h2 className="text-3xl font-bold text-center">Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email address is required" })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("password", { required: "password is required",
                    minLength:{value:6,message:'password must be 6 characters or longer'} })} />
                        <label className="label">
                            <button><span className="label-text text-red-600">Forget Password?</span></button>
                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full max-w-xs mt-4' value='Login' type="submit" />
                </form>
                <p className='mt-4'>New to Doctors Portal? <Link className='text-secondary font-semibold' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline max-w-xs w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;