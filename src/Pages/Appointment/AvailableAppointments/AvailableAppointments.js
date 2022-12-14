import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {  useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
   
    // const[appointmentOptions,setAppointmentOptions]=useState([])
    const[treatment, setTreatment]=useState(null)
    // treatment is appointment option
    const date=format(selectedDate,'PP')
    const {data:appointmentOptions=[],refetch,isLoading}=useQuery({
        queryKey:['appointmentOptions',date],
        queryFn:async()=> {
          const res=await  fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
           const data=await res.json()
           return data;
        }
    })

   /*  useEffect(()=>{
        fetch('http://localhost:5000/appointmentOptions')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[]) */
     
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <p className='text-center text-primary font-semibold'>Available Appointments on {format(selectedDate,'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option=><AppointmentOption
                       key={option._id}
                       appointmentOption={option}
                       setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
          {  
          treatment && 
          <BookingModal
             treatment={treatment}
             selectedDate={selectedDate}
             refetch={refetch}
             setTreatment={setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;