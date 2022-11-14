import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
   
    const[appointmentOptions,setAppointmentOptions]=useState([])
    const[treatment, setTreatment]=useState(null)
    // treatment is appointment option
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
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
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;