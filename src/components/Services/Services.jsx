import React from 'react';
import ServiceCard from './ServiceCard';
import Button from '../Button/Button';


const Services = () => {
    return (
        <div id='services' className='bg-gray-200 w-full h-[130vh] lg:px-10 sm:px-4 lg:flex sm:block justify-center items-center'>
            <div className='lg:w-3/5 lg:flex sm:block justify-center items-center '>
                <div className=''>
                    <ServiceCard icon={'mobile'} title={'Responsive Design'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus maiores animi.'} />

                    <ServiceCard icon={'desktop'} title={'Clear Design'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus maiores animi.'} />
                </div>
                <div className='translate-y-8' >
                    <ServiceCard icon={'rocket'} title={'Fast Boot'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus maiores animi.'} />
                    <ServiceCard title={'Quick Support'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus maiores animi'} />

                </div>
            </div>
            <div className='lg:w-2/5 sm:w-full lg:my-3 sm:my-12  ms-7'>

                <h1 className='text-violet-800 lg:my-5 sm:my-3 font-bold '>OUR SERVICEES</h1>
                <h1 className='font-black  text-gray-700 lg:text-5xl sm:text-[44px] xs:text-base lg:my-8 sm:my-5'>We Provide Best Services</h1>
                <p className='font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Button btnText={'VIEW ALL'} className={'my-10'} />
            </div>
        </div>
    )
}

export default Services
