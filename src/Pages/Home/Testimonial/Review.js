import React from 'react';

const Review = ({ reviewData }) => {
    const { name, img, description, location } = reviewData
    return (
        <div className="card  w-96 shadow-xl">
            <div className="card-body">

                <p>{description}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-16  m-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img}  alt="" />
                    </div>
                </div>
                <div className=''>
                    <h5 className='text-lg'>{name}</h5>
                    <h5 className=''>{location}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;