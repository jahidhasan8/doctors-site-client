import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from  '../../../assets/images/people1.png'
import people2 from  '../../../assets/images/people2.png'
import people3 from  '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviewsData=[
        {
            _id:1,
            name:'Winson Herry',
            location:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1
        },
        {
            _id:2,
            name:'Winson Herry',
            location:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2

        },
        {
            _id:3,
            name:'Winson Herry',
            location:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
               <div>
                <h4 className='text-xl text-primary'>Testimonial</h4>
                <h3 className='text-3xl'>What Our Patients Says</h3>
               </div>
               <figure>
                <img className='w-24 lg:w-48' src={quote} alt="" />
               </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                 {
                    reviewsData.map(reviewData=><Review
                        key={reviewData._id}
                        reviewData={reviewData}
                    ></Review>)
                 }
            </div>
        </section>
    );
};

export default Testimonial;