import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Contact = () => {
    return (
        <section className='mt-24 p-12' style={{
            background:`url(${appointment})`
        
        }}>
            <div className='text-center'>
                <h4 className='text-primary fw-semibold'>Contact Us</h4>
                <h2 className='text-xl text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center mt-4'>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mt-2" />
                <br />
                <textarea className="textarea textarea-bordered w-full max-w-xs mt-2" placeholder="Bio"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;