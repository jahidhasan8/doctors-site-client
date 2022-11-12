import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const TreatmentCard = () => {
    return (
        <div className="hero mt-16 md:w-4/5 mx-auto">
            <div className="hero-content flex-col lg:flex-row p-0">
                <img src={ treatment} className="max-w-sm hidden md:block rounded-lg shadow-2xl" alt='' />
                <div className='px-6 '>
                    <h1 className="text-4xl  font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pageIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;