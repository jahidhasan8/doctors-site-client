import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const{register,handleSubmit,formState:{errors} }=useForm()

    const handleSignup=(data)=>{
      console.log(data);
    }
    return (
        <div className='h-[600px] flex justify-center items-center' >
            <div className='w-96 p-6'>
                <h2 className="text-3xl font-bold text-center">Signup</h2>

                <form onSubmit={handleSubmit(handleSignup)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{required:"name is required"})} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{required:"Email is required"})} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{required:"password is required",
                         minLength:{value:6,message:"password should be 6 characters or long"}
                    })} placeholder="Type here" className="input input-bordered w-full max-w-xs"  />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full max-w-xs mt-4' value='Signup' type="submit" />
                </form>
                <p className='mt-4'>Already have an account? <Link className='text-secondary font-semibold' to='/login'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline max-w-xs w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;