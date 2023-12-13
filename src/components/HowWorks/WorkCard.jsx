import React from 'react'

const WorkCard = ({Img, title, description}) => {
    return (
        <div className='lg:w-1/3 sm:w-full flex flex-col justify-center items-center lg:mx-6 sm:mx-3'>
            <img src={Img} alt='work 1' className='w-3/4'/>
            <h1 className='font-bold text-xl text-gray-700 my-2'>{title}</h1>
            <p className='p-2 font-light'>{description}</p>
        </div>
    )
}

export default WorkCard
