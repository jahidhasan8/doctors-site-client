import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const imageHostKey=process.env.REACT_APP_imgbb_key
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })
    const handleAddDoctor = data => {
         const image=data.image[0]
         const formData=new FormData()
         formData.append('image',image)
         const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
          
         fetch(url,{
            method:'POST',
            body:formData
         })
         .then(res=>res.json())
         .then(imgData=>{
            
            if(imgData.success){
                console.log(imgData.data.url);
            }
         })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-96'>
            <h2 className="test-4xl">Add A Doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)} >

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "name is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Email is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please select a specialty</option>
                        {
                            specialties.map(specialty => <option 
                                key={specialty._id}
                                 value={specialty.name}
                            
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>
                 
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", { required: "photo is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full max-w-xs mt-4' value='Add Doctor' type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;