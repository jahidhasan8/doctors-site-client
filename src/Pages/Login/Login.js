
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const{signIn,googleSignIn}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const[loginError,setLoginError]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const handleLogin = data => {
        setLoginError('')
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user 
            console.log(user);
            navigate(from,{replace:true})
            toast.success("User login successfully")
        })
        .catch(error=>{
            toast.error(error.message)
           setLoginError(error.message)
        })
    }
    
    const handleGoogleSignIn=()=>{
        googleSignIn(googleProvider)
        .then(result=>{
            const user=result.user 
            console.log(user);
            toast.success("google signIn successful")
        })
        .catch(error=>toast.error(error.message))
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
                    <div>
                        {
                            loginError && <p className='text-red-600 mt-3'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='mt-4'>New to Doctors Portal? <Link className='text-secondary font-semibold' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline max-w-xs w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;