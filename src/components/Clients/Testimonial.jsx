import React from 'react';
import { PiMaskHappyBold } from "react-icons/pi";

const Testimonial = ({name, website, review}) => {
    return (
        <div className='w-80 bg-transparent mx-5 mt-2'>
            <div className='bg-white h-2/5 rounded-lg'>
                <p className='text-indigo-900 text-center p-3'>{review}.</p>
            </div>

            <div className='flex m-3 mt-8'>
                <PiMaskHappyBold className='text-3xl p-4 border border-white rounded-full w-16 h-16 hover:bg-black' />
                <div className='ms-5 '>
                    <h1 className='font-bold'>{name}</h1>
                    <h1>{website}</h1>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
