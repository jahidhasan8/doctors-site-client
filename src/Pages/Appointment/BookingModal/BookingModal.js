import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment,selectedDate,setTreatment }) => {
    const { name, slots } = treatment

    const date = format(selectedDate,'PP')

    const handleBooking=(e)=>{
     e.preventDefault()
     const form=e.target 
     const customer=form.customer.value 
     const phone=form.phone.value 
     const email=form.email.value 
     const slot=form.slot.value

     const booking={
        appointmentDate:date,
        slot,
        name,
        customer,
        phone,
        email
     }
     setTreatment(null)
     console.log(booking);

    }
    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-10'>

                        <input type="text"  value={date} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            
                           {
                            slots.map((slot,i)=><option key={i} value={slot}>{slot }</option>)
                           }
                        </select>
                        <input type="text" name='customer' placeholder="Enter your name" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Enter your phone" className="input input-bordered w-full " />
                        <input type="text" name='email' placeholder="Enter your email" className="input input-bordered w-full " /> <br />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;