import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import TreatmentCard from './TreatmentCard';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h5 className='text-primary font-bold uppercase text-xl'>OUR SERVICES</h5>
                <h3 className='text-2xl font-semibold'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    servicesData.map(serviceData => <Service
                        key={serviceData.id}
                        serviceData={serviceData}
                    ></Service>)
                }
            </div>

           <TreatmentCard></TreatmentCard>
        </div>
    );
};

export default Services;